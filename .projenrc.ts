import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '5.0.4',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-ec2-instance-connect-custom-resource',
  description: 'AWS EC2 instance connect custom resource',
  keywords: ['aws', 'cdk', 'aws-cdk', 'ec2', 'instance-connect', 'custom-resource'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-ec2-instance-connect-custom-resource.git',
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-ec2-instance-connect-custom-resource',
    module: 'gammarer.aws_ec2_instance_connect_custom_resource',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.ec2_instance_connect_custom_resource',
    mavenArtifactId: 'aws-ec2-instance-connect-custom-resource',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});
project.synth();