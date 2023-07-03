import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { AwsCustomResource } from 'aws-cdk-lib/custom-resources';
import { EC2InstanceConnectCustomResource } from '../src';

describe('CustomResource Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const iccr = new EC2InstanceConnectCustomResource(stack, 'EC2InstanceConnectCustomResource', {
    subnetId: 'example-subnet-id',
    securityGroupIds: [
      'example-security-group-id',
    ],
  });

  const template = Template.fromStack(stack);

  it('Is CustomResource', () => {
    expect(iccr).toBeInstanceOf(AwsCustomResource);
  });

  it('Should have Lambda Function Role', () => {
    template.hasResourceProperties('AWS::IAM::Role', Match.objectEquals({
      AssumeRolePolicyDocument: Match.objectEquals({
        Version: '2012-10-17',
        Statement: Match.arrayWith([
          Match.objectEquals({
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          }),
        ]),
      }),
      ManagedPolicyArns: Match.arrayWith([
        {
          'Fn::Join': Match.arrayEquals([
            '',
            Match.arrayEquals([
              'arn:',
              {
                Ref: 'AWS::Partition',
              },
              ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
            ]),
          ]),
        },
      ]),
    }));
  });

  it('Should have Lambda Function', () => {
    template.hasResourceProperties('AWS::Lambda::Function', Match.objectEquals({
      Code: {
        S3Bucket: Match.anyValue(),
        S3Key: Match.stringLikeRegexp('.*.zip'),
      },
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          Match.stringLikeRegexp('.*ServiceRole.*'),
          'Arn',
        ],
      },
      Runtime: 'nodejs14.x',
      Timeout: 120,
    }));
  });

  it('Should have Custom Resource Policy', () => {
    template.hasResourceProperties('AWS::IAM::Policy', Match.objectEquals({
      PolicyName: Match.anyValue(),
      PolicyDocument: {
        Statement: [
          {
            Action: [
              'iam:CreateServiceLinkedRole',
              'ec2:CreateInstanceConnectEndpoint',
              'ec2:CreateNetworkInterface',
              'ec2:CreateTags',
              'ec2:DeleteInstanceConnectEndpoint',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      Roles: [
        {
          Ref: Match.stringLikeRegexp('AWS.*ServiceRole.*'),
        },
      ],
    }));
  });

  it('Should have Custom', () => {
    template.hasResource('Custom::AWS', Match.objectEquals({
      Type: 'Custom::AWS',
      DeletionPolicy: 'Delete',
      UpdateReplacePolicy: 'Delete',
      DependsOn: [
        'EC2InstanceConnectCustomResourceCustomResourcePolicyF9AB3C7C',
      ],
      Properties: {
        Create: JSON.stringify({
          service: 'EC2',
          action: 'createInstanceConnectEndpoint',
          parameters: {
            SubnetId: 'example-subnet-id',
            DryRun: false,
            PreserveClientIp: true,
            SecurityGroupIds: [
              'example-security-group-id',
            ],
          },
          physicalResourceId: {
            responsePath: 'InstanceConnectEndpoint.InstanceConnectEndpointId',
          },
        }),
        Update: JSON.stringify({
          service: 'EC2',
          action: 'createInstanceConnectEndpoint',
          parameters: {
            SubnetId: 'example-subnet-id',
            DryRun: false,
            PreserveClientIp: true,
            SecurityGroupIds: [
              'example-security-group-id',
            ],
          },
          physicalResourceId: {
            responsePath: 'InstanceConnectEndpoint.InstanceConnectEndpointId',
          },
        }),
        Delete: JSON.stringify({
          service: 'EC2',
          action: 'deleteInstanceConnectEndpoint',
          parameters: {
            DryRun: false,
            InstanceConnectEndpointId: 'PHYSICAL:RESOURCEID:',
          },
        }),
        InstallLatestAwsSdk: true,
        ServiceToken: {
          'Fn::GetAtt': [
            'AWS679f53fac002430cb0da5b7982bd22872D164C4C',
            'Arn',
          ],
        },
      },
    }));
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});