import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-ec2-instance-connect-custom-resource',
  description: 'AWS EC2 instance connect custom resource',
  keywords: ['aws', 'cdk', 'aws-cdk', 'ec2', 'instance-connect', 'custom-resource'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarer/aws-ec2-instance-connect-custom-resource.git',
  majorVersion: 1,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '18.17.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 16 * * 4']), // every thursday 16:00 (JST/FRI:0100)
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