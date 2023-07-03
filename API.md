# AWS EC2 Instance Connect Custom Resource

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EC2InstanceConnectCustomResource <a name="EC2InstanceConnectCustomResource" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource"></a>

#### Initializers <a name="Initializers" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer"></a>

```typescript
import { EC2InstanceConnectCustomResource } from '@yicr/aws-ec2-instance-connect-custom-resource'

new EC2InstanceConnectCustomResource(scope: Construct, id: string, props: EC2InstanceConnectCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps">EC2InstanceConnectCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps">EC2InstanceConnectCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField">getResponseField</a></code> | Returns response data for the AWS SDK call as string. |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |

---

##### `toString` <a name="toString" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getResponseField` <a name="getResponseField" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns response data for the AWS SDK call as string.

Example for S3 / listBucket : 'Buckets.0.Name'

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseField.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference"></a>

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

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct"></a>

```typescript
import { EC2InstanceConnectCustomResource } from '@yicr/aws-ec2-instance-connect-custom-resource'

EC2InstanceConnectCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---


## Structs <a name="Structs" id="Structs"></a>

### EC2InstanceConnectCustomResourceProps <a name="EC2InstanceConnectCustomResourceProps" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.Initializer"></a>

```typescript
import { EC2InstanceConnectCustomResourceProps } from '@yicr/aws-ec2-instance-connect-custom-resource'

const eC2InstanceConnectCustomResourceProps: EC2InstanceConnectCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@yicr/aws-ec2-instance-connect-custom-resource.EC2InstanceConnectCustomResourceProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---



