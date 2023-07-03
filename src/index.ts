import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId, PhysicalResourceIdReference } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface EC2InstanceConnectCustomResourceProps {
  readonly subnetId: string;
  readonly securityGroupIds: string[];
}

export class EC2InstanceConnectCustomResource extends AwsCustomResource {

  constructor(scope: Construct, id: string, props: EC2InstanceConnectCustomResourceProps) {
    super(scope, id, {
      installLatestAwsSdk: true,
      onUpdate: {
        service: 'EC2',
        action: 'createInstanceConnectEndpoint',
        parameters: {
          SubnetId: props.subnetId,
          DryRun: false,
          PreserveClientIp: true,
          SecurityGroupIds: props.securityGroupIds,
        },
        physicalResourceId: PhysicalResourceId.fromResponse('InstanceConnectEndpoint.InstanceConnectEndpointId'),
      },
      onDelete: {
        service: 'EC2',
        action: 'deleteInstanceConnectEndpoint',
        parameters: {
          DryRun: false,
          InstanceConnectEndpointId: new PhysicalResourceIdReference(),
        },
      },
      policy: AwsCustomResourcePolicy.fromStatements([
        new PolicyStatement({
          actions: [
            'iam:CreateServiceLinkedRole',
            'ec2:CreateInstanceConnectEndpoint',
            'ec2:CreateNetworkInterface',
            'ec2:CreateTags',
            'ec2:DeleteInstanceConnectEndpoint',
          ],
          resources: ['*'],
        }),
      ]),
    });
  }
}