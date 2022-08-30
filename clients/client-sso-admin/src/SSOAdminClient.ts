// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
} from "./commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "./commands/AttachManagedPolicyToPermissionSetCommand";
import {
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "./commands/CreateAccountAssignmentCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "./commands/CreatePermissionSetCommand";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "./commands/DeleteAccountAssignmentCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "./commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "./commands/DeletePermissionSetCommand";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "./commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "./commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "./commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "./commands/GetInlinePolicyForPermissionSetCommand";
import {
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
} from "./commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "./commands/ListAccountAssignmentCreationStatusCommand";
import {
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/ListAccountAssignmentDeletionStatusCommand";
import {
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "./commands/ListAccountAssignmentsCommand";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "./commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import {
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "./commands/ListManagedPoliciesInPermissionSetCommand";
import {
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "./commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "./commands/ListPermissionSetsCommand";
import {
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "./commands/ProvisionPermissionSetCommand";
import {
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "./commands/PutInlinePolicyToPermissionSetCommand";
import {
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
} from "./commands/PutPermissionsBoundaryToPermissionSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "./commands/UpdatePermissionSetCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput
  | AttachManagedPolicyToPermissionSetCommandInput
  | CreateAccountAssignmentCommandInput
  | CreateInstanceAccessControlAttributeConfigurationCommandInput
  | CreatePermissionSetCommandInput
  | DeleteAccountAssignmentCommandInput
  | DeleteInlinePolicyFromPermissionSetCommandInput
  | DeleteInstanceAccessControlAttributeConfigurationCommandInput
  | DeletePermissionSetCommandInput
  | DeletePermissionsBoundaryFromPermissionSetCommandInput
  | DescribeAccountAssignmentCreationStatusCommandInput
  | DescribeAccountAssignmentDeletionStatusCommandInput
  | DescribeInstanceAccessControlAttributeConfigurationCommandInput
  | DescribePermissionSetCommandInput
  | DescribePermissionSetProvisioningStatusCommandInput
  | DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput
  | DetachManagedPolicyFromPermissionSetCommandInput
  | GetInlinePolicyForPermissionSetCommandInput
  | GetPermissionsBoundaryForPermissionSetCommandInput
  | ListAccountAssignmentCreationStatusCommandInput
  | ListAccountAssignmentDeletionStatusCommandInput
  | ListAccountAssignmentsCommandInput
  | ListAccountsForProvisionedPermissionSetCommandInput
  | ListCustomerManagedPolicyReferencesInPermissionSetCommandInput
  | ListInstancesCommandInput
  | ListManagedPoliciesInPermissionSetCommandInput
  | ListPermissionSetProvisioningStatusCommandInput
  | ListPermissionSetsCommandInput
  | ListPermissionSetsProvisionedToAccountCommandInput
  | ListTagsForResourceCommandInput
  | ProvisionPermissionSetCommandInput
  | PutInlinePolicyToPermissionSetCommandInput
  | PutPermissionsBoundaryToPermissionSetCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateInstanceAccessControlAttributeConfigurationCommandInput
  | UpdatePermissionSetCommandInput;

export type ServiceOutputTypes =
  | AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  | AttachManagedPolicyToPermissionSetCommandOutput
  | CreateAccountAssignmentCommandOutput
  | CreateInstanceAccessControlAttributeConfigurationCommandOutput
  | CreatePermissionSetCommandOutput
  | DeleteAccountAssignmentCommandOutput
  | DeleteInlinePolicyFromPermissionSetCommandOutput
  | DeleteInstanceAccessControlAttributeConfigurationCommandOutput
  | DeletePermissionSetCommandOutput
  | DeletePermissionsBoundaryFromPermissionSetCommandOutput
  | DescribeAccountAssignmentCreationStatusCommandOutput
  | DescribeAccountAssignmentDeletionStatusCommandOutput
  | DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  | DescribePermissionSetCommandOutput
  | DescribePermissionSetProvisioningStatusCommandOutput
  | DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput
  | DetachManagedPolicyFromPermissionSetCommandOutput
  | GetInlinePolicyForPermissionSetCommandOutput
  | GetPermissionsBoundaryForPermissionSetCommandOutput
  | ListAccountAssignmentCreationStatusCommandOutput
  | ListAccountAssignmentDeletionStatusCommandOutput
  | ListAccountAssignmentsCommandOutput
  | ListAccountsForProvisionedPermissionSetCommandOutput
  | ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
  | ListInstancesCommandOutput
  | ListManagedPoliciesInPermissionSetCommandOutput
  | ListPermissionSetProvisioningStatusCommandOutput
  | ListPermissionSetsCommandOutput
  | ListPermissionSetsProvisionedToAccountCommandOutput
  | ListTagsForResourceCommandOutput
  | ProvisionPermissionSetCommandOutput
  | PutInlinePolicyToPermissionSetCommandOutput
  | PutPermissionsBoundaryToPermissionSetCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  | UpdatePermissionSetCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type SSOAdminClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SSOAdminClient class constructor that set the region, credentials and other options.
 */
export interface SSOAdminClientConfig extends SSOAdminClientConfigType {}

type SSOAdminClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
 */
export interface SSOAdminClientResolvedConfig extends SSOAdminClientResolvedConfigType {}

/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their
 *       access centrally across AWS accounts and applications. IAM Identity Center is the recommended
 *       approach for workforce authentication and authorization in AWS, for organizations of any size
 *       and type.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *         <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>This reference guide provides information on single sign-on operations which could be used for
 *       access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *         Guide</a>.</p>
 *          <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
 *       principals. For more information about how to work with principals and principal IDs in IAM Identity Center,
 *       see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
 *         Reference</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export class SSOAdminClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOAdminClientResolvedConfig
> {
  /**
   * The resolved configuration of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
   */
  readonly config: SSOAdminClientResolvedConfig;

  constructor(configuration: SSOAdminClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
