[![GitHub](https://img.shields.io/github/license/yicr/aws-ec2-instance-connect-custom-resource?style=flat-square)](https://github.com/yicr/aws-ec2-instance-connect-custom-resource/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarer/aws-ec2-instance-connect-custom-resource?style=flat-square)](https://www.npmjs.com/package/@gammarer/aws-ec2-instance-connect-custom-resource)
[![PyPI](https://img.shields.io/pypi/v/gammarer.aws-ec2-instance-connect-custom-resource?style=flat-square)](https://pypi.org/project/gammarer.aws-ec2-instance-connect-custom-resource/)
<!-- [![Nuget](https://img.shields.io/nuget/v/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution?style=flat-square)](https://www.nuget.org/packages/Gammarer.CDK.AWS.SecureFrontendWebAppCloudFrontDistribution/)  -->
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.gammarer/aws-ec2-instance-connect-custom-resource?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/gammarer/aws-ec2-instance-connect-custom-resource/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/yicr/aws-ec2-instance-connect-custom-resource/release.yml?branch=main&label=release&style=flat-square)](https://github.com/yicr/aws-ec2-instance-connect-custom-resource/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yicr/aws-ec2-instance-connect-custom-resource?sort=semver&style=flat-square)](https://github.com/yicr/aws-ec2-instance-connect-custom-resource/releases)

# AWS EC2 Instance Connect Custom Resource

AWS EC2 instance connect custom resource

## Resources

This construct creating resource list.

- AWS Custom Resource
    - Lambda Function Iam Role
    - Lambda Function
    - Custom Resource Iam Role
    - Custom Policy

## Install

### TypeScript

```shell
npm install @gammarer/aws-ec2-instance-connect-custom-resource
# or
yarn add @gammarer/aws-ec2-instance-connect-custom-resource
```

### Python

```shell
pip install gammarer.aws-ec2-instance-connect-custom-resource
```

### Java

Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-ec2-instance-connect-custom-resource</artifactId>
</dependency>
```

## Example

```typescript
import { EC2InstanceConnectCustomResource } from '@gammarer/aws-ec2-instance-connect-custom-resource';

new EC2InstanceConnectCustomResource(stack, 'EC2InstanceConnectCustomResource', {
  subnetId: 'example-subnet-id',
  securityGroupIds: [
    'example-security-group-id',
  ],
});

```

## License

This project is licensed under the Apache-2.0 License.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EC2InstanceConnectCustomResource <a name="EC2InstanceConnectCustomResource" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource"></a>

#### Initializers <a name="Initializers" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer"></a>

```typescript
import { EC2InstanceConnectCustomResource } from '@gammarer/aws-ec2-instance-connect-custom-resource'

new EC2InstanceConnectCustomResource(scope: Construct, id: string, props: EC2InstanceConnectCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps">EC2InstanceConnectCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps">EC2InstanceConnectCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField">getResponseField</a></code> | Returns response data for the AWS SDK call as string. |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |

---

##### `toString` <a name="toString" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getResponseField` <a name="getResponseField" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns response data for the AWS SDK call as string.

Example for S3 / listBucket : 'Buckets.0.Name'

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference"></a>

```typescript
public getResponseFieldReference(dataPath: string): Reference
```

Returns response data for the AWS SDK call.

Example for S3 / listBucket : 'Buckets.0.Name'

Use `Token.asXxx` to encode the returned `Reference` as a specific type or
use the convenience `getDataString` for string attributes.

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct"></a>

```typescript
import { EC2InstanceConnectCustomResource } from '@gammarer/aws-ec2-instance-connect-custom-resource'

EC2InstanceConnectCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.PROVIDER_FUNCTION_UUID">PROVIDER_FUNCTION_UUID</a></code> | <code>string</code> | The uuid of the custom resource provider singleton lambda function. |

---

##### `PROVIDER_FUNCTION_UUID`<sup>Required</sup> <a name="PROVIDER_FUNCTION_UUID" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.PROVIDER_FUNCTION_UUID"></a>

```typescript
public readonly PROVIDER_FUNCTION_UUID: string;
```

- *Type:* string

The uuid of the custom resource provider singleton lambda function.

---

## Structs <a name="Structs" id="Structs"></a>

### EC2InstanceConnectCustomResourceProps <a name="EC2InstanceConnectCustomResourceProps" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.Initializer"></a>

```typescript
import { EC2InstanceConnectCustomResourceProps } from '@gammarer/aws-ec2-instance-connect-custom-resource'

const eC2InstanceConnectCustomResourceProps: EC2InstanceConnectCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@gammarer/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---



