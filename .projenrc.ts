import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.62.0',
  typescriptVersion: '5.0.4',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  name: '@yicr/aws-ec2-instance-connect-custom-resource',
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
});
project.synth();