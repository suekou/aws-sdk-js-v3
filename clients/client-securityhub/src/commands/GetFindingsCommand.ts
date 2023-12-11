// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetFindingsRequest, GetFindingsResponse } from "../models/models_2";
import { de_GetFindingsCommand, se_GetFindingsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandInput extends GetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of findings that match the specified criteria.</p>
 *          <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingsRequest
 *   Filters: { // AwsSecurityFindingFilters
 *     ProductArn: [ // StringFilterList
 *       { // StringFilter
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     AwsAccountId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     Id: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     GeneratorId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     Region: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     Type: "<StringFilterList>",
 *     FirstObservedAt: [ // DateFilterList
 *       { // DateFilter
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: { // DateRange
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     LastObservedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     CreatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     UpdatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     SeverityProduct: [ // NumberFilterList
 *       { // NumberFilter
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     SeverityNormalized: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     SeverityLabel: "<StringFilterList>",
 *     Confidence: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     Criticality: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     Title: "<StringFilterList>",
 *     Description: "<StringFilterList>",
 *     RecommendationText: "<StringFilterList>",
 *     SourceUrl: "<StringFilterList>",
 *     ProductFields: [ // MapFilterList
 *       { // MapFilter
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ProductName: "<StringFilterList>",
 *     CompanyName: "<StringFilterList>",
 *     UserDefinedFields: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     MalwareName: "<StringFilterList>",
 *     MalwareType: "<StringFilterList>",
 *     MalwarePath: "<StringFilterList>",
 *     MalwareState: "<StringFilterList>",
 *     NetworkDirection: "<StringFilterList>",
 *     NetworkProtocol: "<StringFilterList>",
 *     NetworkSourceIpV4: [ // IpFilterList
 *       { // IpFilter
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkSourceIpV6: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkSourcePort: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     NetworkSourceDomain: "<StringFilterList>",
 *     NetworkSourceMac: "<StringFilterList>",
 *     NetworkDestinationIpV4: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkDestinationIpV6: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkDestinationPort: "<NumberFilterList>",
 *     NetworkDestinationDomain: "<StringFilterList>",
 *     ProcessName: "<StringFilterList>",
 *     ProcessPath: "<StringFilterList>",
 *     ProcessPid: "<NumberFilterList>",
 *     ProcessParentPid: "<NumberFilterList>",
 *     ProcessLaunchedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     ProcessTerminatedAt: "<DateFilterList>",
 *     ThreatIntelIndicatorType: "<StringFilterList>",
 *     ThreatIntelIndicatorValue: "<StringFilterList>",
 *     ThreatIntelIndicatorCategory: "<StringFilterList>",
 *     ThreatIntelIndicatorLastObservedAt: "<DateFilterList>",
 *     ThreatIntelIndicatorSource: "<StringFilterList>",
 *     ThreatIntelIndicatorSourceUrl: "<StringFilterList>",
 *     ResourceType: "<StringFilterList>",
 *     ResourceId: "<StringFilterList>",
 *     ResourcePartition: "<StringFilterList>",
 *     ResourceRegion: "<StringFilterList>",
 *     ResourceTags: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ResourceAwsEc2InstanceType: "<StringFilterList>",
 *     ResourceAwsEc2InstanceImageId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceIpV4Addresses: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     ResourceAwsEc2InstanceIpV6Addresses: "<IpFilterList>",
 *     ResourceAwsEc2InstanceKeyName: "<StringFilterList>",
 *     ResourceAwsEc2InstanceIamInstanceProfileArn: "<StringFilterList>",
 *     ResourceAwsEc2InstanceVpcId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceSubnetId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceLaunchedAt: "<DateFilterList>",
 *     ResourceAwsS3BucketOwnerId: "<StringFilterList>",
 *     ResourceAwsS3BucketOwnerName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyUserName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyPrincipalName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyStatus: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyCreatedAt: "<DateFilterList>",
 *     ResourceAwsIamUserUserName: "<StringFilterList>",
 *     ResourceContainerName: "<StringFilterList>",
 *     ResourceContainerImageId: "<StringFilterList>",
 *     ResourceContainerImageName: "<StringFilterList>",
 *     ResourceContainerLaunchedAt: "<DateFilterList>",
 *     ResourceDetailsOther: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ComplianceStatus: "<StringFilterList>",
 *     VerificationState: "<StringFilterList>",
 *     WorkflowState: "<StringFilterList>",
 *     WorkflowStatus: "<StringFilterList>",
 *     RecordState: "<StringFilterList>",
 *     RelatedFindingsProductArn: "<StringFilterList>",
 *     RelatedFindingsId: "<StringFilterList>",
 *     NoteText: "<StringFilterList>",
 *     NoteUpdatedAt: "<DateFilterList>",
 *     NoteUpdatedBy: "<StringFilterList>",
 *     Keyword: [ // KeywordFilterList
 *       { // KeywordFilter
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     FindingProviderFieldsConfidence: "<NumberFilterList>",
 *     FindingProviderFieldsCriticality: "<NumberFilterList>",
 *     FindingProviderFieldsRelatedFindingsId: "<StringFilterList>",
 *     FindingProviderFieldsRelatedFindingsProductArn: "<StringFilterList>",
 *     FindingProviderFieldsSeverityLabel: "<StringFilterList>",
 *     FindingProviderFieldsSeverityOriginal: "<StringFilterList>",
 *     FindingProviderFieldsTypes: "<StringFilterList>",
 *     Sample: [ // BooleanFilterList
 *       { // BooleanFilter
 *         Value: true || false,
 *       },
 *     ],
 *     ComplianceSecurityControlId: "<StringFilterList>",
 *     ComplianceAssociatedStandardsId: "<StringFilterList>",
 *     VulnerabilitiesExploitAvailable: "<StringFilterList>",
 *     VulnerabilitiesFixAvailable: "<StringFilterList>",
 *     ComplianceSecurityControlParametersName: "<StringFilterList>",
 *     ComplianceSecurityControlParametersValue: "<StringFilterList>",
 *     AwsAccountName: "<StringFilterList>",
 *     ResourceApplicationName: "<StringFilterList>",
 *     ResourceApplicationArn: "<StringFilterList>",
 *   },
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       Field: "STRING_VALUE",
 *       SortOrder: "asc" || "desc",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsResponse
 * //   Findings: [ // AwsSecurityFindingList // required
 * //     { // AwsSecurityFinding
 * //       SchemaVersion: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       ProductArn: "STRING_VALUE", // required
 * //       ProductName: "STRING_VALUE",
 * //       CompanyName: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       GeneratorId: "STRING_VALUE", // required
 * //       AwsAccountId: "STRING_VALUE", // required
 * //       Types: [ // TypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       FirstObservedAt: "STRING_VALUE",
 * //       LastObservedAt: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE", // required
 * //       UpdatedAt: "STRING_VALUE", // required
 * //       Severity: { // Severity
 * //         Product: Number("double"),
 * //         Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //         Normalized: Number("int"),
 * //         Original: "STRING_VALUE",
 * //       },
 * //       Confidence: Number("int"),
 * //       Criticality: Number("int"),
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Remediation: { // Remediation
 * //         Recommendation: { // Recommendation
 * //           Text: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       },
 * //       SourceUrl: "STRING_VALUE",
 * //       ProductFields: { // FieldMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       UserDefinedFields: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Malware: [ // MalwareList
 * //         { // Malware
 * //           Name: "STRING_VALUE", // required
 * //           Type: "ADWARE" || "BLENDED_THREAT" || "BOTNET_AGENT" || "COIN_MINER" || "EXPLOIT_KIT" || "KEYLOGGER" || "MACRO" || "POTENTIALLY_UNWANTED" || "SPYWARE" || "RANSOMWARE" || "REMOTE_ACCESS" || "ROOTKIT" || "TROJAN" || "VIRUS" || "WORM",
 * //           Path: "STRING_VALUE",
 * //           State: "OBSERVED" || "REMOVAL_FAILED" || "REMOVED",
 * //         },
 * //       ],
 * //       Network: { // Network
 * //         Direction: "IN" || "OUT",
 * //         Protocol: "STRING_VALUE",
 * //         OpenPortRange: { // PortRange
 * //           Begin: Number("int"),
 * //           End: Number("int"),
 * //         },
 * //         SourceIpV4: "STRING_VALUE",
 * //         SourceIpV6: "STRING_VALUE",
 * //         SourcePort: Number("int"),
 * //         SourceDomain: "STRING_VALUE",
 * //         SourceMac: "STRING_VALUE",
 * //         DestinationIpV4: "STRING_VALUE",
 * //         DestinationIpV6: "STRING_VALUE",
 * //         DestinationPort: Number("int"),
 * //         DestinationDomain: "STRING_VALUE",
 * //       },
 * //       NetworkPath: [ // NetworkPathList
 * //         { // NetworkPathComponent
 * //           ComponentId: "STRING_VALUE",
 * //           ComponentType: "STRING_VALUE",
 * //           Egress: { // NetworkHeader
 * //             Protocol: "STRING_VALUE",
 * //             Destination: { // NetworkPathComponentDetails
 * //               Address: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               PortRanges: [ // PortRangeList
 * //                 {
 * //                   Begin: Number("int"),
 * //                   End: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //             Source: {
 * //               Address: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               PortRanges: [
 * //                 {
 * //                   Begin: Number("int"),
 * //                   End: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           Ingress: {
 * //             Protocol: "STRING_VALUE",
 * //             Destination: {
 * //               Address: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               PortRanges: [
 * //                 {
 * //                   Begin: Number("int"),
 * //                   End: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //             Source: {
 * //               Address: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               PortRanges: [
 * //                 {
 * //                   Begin: Number("int"),
 * //                   End: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Process: { // ProcessDetails
 * //         Name: "STRING_VALUE",
 * //         Path: "STRING_VALUE",
 * //         Pid: Number("int"),
 * //         ParentPid: Number("int"),
 * //         LaunchedAt: "STRING_VALUE",
 * //         TerminatedAt: "STRING_VALUE",
 * //       },
 * //       Threats: [ // ThreatList
 * //         { // Threat
 * //           Name: "STRING_VALUE",
 * //           Severity: "STRING_VALUE",
 * //           ItemCount: Number("int"),
 * //           FilePaths: [ // FilePathList
 * //             { // FilePaths
 * //               FilePath: "STRING_VALUE",
 * //               FileName: "STRING_VALUE",
 * //               ResourceId: "STRING_VALUE",
 * //               Hash: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       ThreatIntelIndicators: [ // ThreatIntelIndicatorList
 * //         { // ThreatIntelIndicator
 * //           Type: "DOMAIN" || "EMAIL_ADDRESS" || "HASH_MD5" || "HASH_SHA1" || "HASH_SHA256" || "HASH_SHA512" || "IPV4_ADDRESS" || "IPV6_ADDRESS" || "MUTEX" || "PROCESS" || "URL",
 * //           Value: "STRING_VALUE",
 * //           Category: "BACKDOOR" || "CARD_STEALER" || "COMMAND_AND_CONTROL" || "DROP_SITE" || "EXPLOIT_SITE" || "KEYLOGGER",
 * //           LastObservedAt: "STRING_VALUE",
 * //           Source: "STRING_VALUE",
 * //           SourceUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Resources: [ // ResourceList // required
 * //         { // Resource
 * //           Type: "STRING_VALUE", // required
 * //           Id: "STRING_VALUE", // required
 * //           Partition: "aws" || "aws-cn" || "aws-us-gov",
 * //           Region: "STRING_VALUE",
 * //           ResourceRole: "STRING_VALUE",
 * //           Tags: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           DataClassification: { // DataClassificationDetails
 * //             DetailedResultsLocation: "STRING_VALUE",
 * //             Result: { // ClassificationResult
 * //               MimeType: "STRING_VALUE",
 * //               SizeClassified: Number("long"),
 * //               AdditionalOccurrences: true || false,
 * //               Status: { // ClassificationStatus
 * //                 Code: "STRING_VALUE",
 * //                 Reason: "STRING_VALUE",
 * //               },
 * //               SensitiveData: [ // SensitiveDataResultList
 * //                 { // SensitiveDataResult
 * //                   Category: "STRING_VALUE",
 * //                   Detections: [ // SensitiveDataDetectionsList
 * //                     { // SensitiveDataDetections
 * //                       Count: Number("long"),
 * //                       Type: "STRING_VALUE",
 * //                       Occurrences: { // Occurrences
 * //                         LineRanges: [ // Ranges
 * //                           { // Range
 * //                             Start: Number("long"),
 * //                             End: Number("long"),
 * //                             StartColumn: Number("long"),
 * //                           },
 * //                         ],
 * //                         OffsetRanges: [
 * //                           {
 * //                             Start: Number("long"),
 * //                             End: Number("long"),
 * //                             StartColumn: Number("long"),
 * //                           },
 * //                         ],
 * //                         Pages: [ // Pages
 * //                           { // Page
 * //                             PageNumber: Number("long"),
 * //                             LineRange: {
 * //                               Start: Number("long"),
 * //                               End: Number("long"),
 * //                               StartColumn: Number("long"),
 * //                             },
 * //                             OffsetRange: {
 * //                               Start: Number("long"),
 * //                               End: Number("long"),
 * //                               StartColumn: Number("long"),
 * //                             },
 * //                           },
 * //                         ],
 * //                         Records: [ // Records
 * //                           { // Record
 * //                             JsonPath: "STRING_VALUE",
 * //                             RecordIndex: Number("long"),
 * //                           },
 * //                         ],
 * //                         Cells: [ // Cells
 * //                           { // Cell
 * //                             Column: Number("long"),
 * //                             Row: Number("long"),
 * //                             ColumnName: "STRING_VALUE",
 * //                             CellReference: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                   ],
 * //                   TotalCount: Number("long"),
 * //                 },
 * //               ],
 * //               CustomDataIdentifiers: { // CustomDataIdentifiersResult
 * //                 Detections: [ // CustomDataIdentifiersDetectionsList
 * //                   { // CustomDataIdentifiersDetections
 * //                     Count: Number("long"),
 * //                     Arn: "STRING_VALUE",
 * //                     Name: "STRING_VALUE",
 * //                     Occurrences: {
 * //                       LineRanges: [
 * //                         "<Range>",
 * //                       ],
 * //                       OffsetRanges: [
 * //                         "<Range>",
 * //                       ],
 * //                       Pages: [
 * //                         {
 * //                           PageNumber: Number("long"),
 * //                           LineRange: "<Range>",
 * //                           OffsetRange: "<Range>",
 * //                         },
 * //                       ],
 * //                       Records: [
 * //                         {
 * //                           JsonPath: "STRING_VALUE",
 * //                           RecordIndex: Number("long"),
 * //                         },
 * //                       ],
 * //                       Cells: [
 * //                         {
 * //                           Column: Number("long"),
 * //                           Row: Number("long"),
 * //                           ColumnName: "STRING_VALUE",
 * //                           CellReference: "STRING_VALUE",
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                 ],
 * //                 TotalCount: Number("long"),
 * //               },
 * //             },
 * //           },
 * //           Details: { // ResourceDetails
 * //             AwsAutoScalingAutoScalingGroup: { // AwsAutoScalingAutoScalingGroupDetails
 * //               LaunchConfigurationName: "STRING_VALUE",
 * //               LoadBalancerNames: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               HealthCheckType: "STRING_VALUE",
 * //               HealthCheckGracePeriod: Number("int"),
 * //               CreatedTime: "STRING_VALUE",
 * //               MixedInstancesPolicy: { // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails
 * //                 InstancesDistribution: { // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails
 * //                   OnDemandAllocationStrategy: "STRING_VALUE",
 * //                   OnDemandBaseCapacity: Number("int"),
 * //                   OnDemandPercentageAboveBaseCapacity: Number("int"),
 * //                   SpotAllocationStrategy: "STRING_VALUE",
 * //                   SpotInstancePools: Number("int"),
 * //                   SpotMaxPrice: "STRING_VALUE",
 * //                 },
 * //                 LaunchTemplate: { // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails
 * //                   LaunchTemplateSpecification: { // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
 * //                     LaunchTemplateId: "STRING_VALUE",
 * //                     LaunchTemplateName: "STRING_VALUE",
 * //                     Version: "STRING_VALUE",
 * //                   },
 * //                   Overrides: [ // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList
 * //                     { // AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails
 * //                       InstanceType: "STRING_VALUE",
 * //                       WeightedCapacity: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //               AvailabilityZones: [ // AwsAutoScalingAutoScalingGroupAvailabilityZonesList
 * //                 { // AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               LaunchTemplate: { // AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification
 * //                 LaunchTemplateId: "STRING_VALUE",
 * //                 LaunchTemplateName: "STRING_VALUE",
 * //                 Version: "STRING_VALUE",
 * //               },
 * //               CapacityRebalance: true || false,
 * //             },
 * //             AwsCodeBuildProject: { // AwsCodeBuildProjectDetails
 * //               EncryptionKey: "STRING_VALUE",
 * //               Artifacts: [ // AwsCodeBuildProjectArtifactsList
 * //                 { // AwsCodeBuildProjectArtifactsDetails
 * //                   ArtifactIdentifier: "STRING_VALUE",
 * //                   EncryptionDisabled: true || false,
 * //                   Location: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   NamespaceType: "STRING_VALUE",
 * //                   OverrideArtifactName: true || false,
 * //                   Packaging: "STRING_VALUE",
 * //                   Path: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Environment: { // AwsCodeBuildProjectEnvironment
 * //                 Certificate: "STRING_VALUE",
 * //                 EnvironmentVariables: [ // AwsCodeBuildProjectEnvironmentEnvironmentVariablesList
 * //                   { // AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails
 * //                     Name: "STRING_VALUE",
 * //                     Type: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 PrivilegedMode: true || false,
 * //                 ImagePullCredentialsType: "STRING_VALUE",
 * //                 RegistryCredential: { // AwsCodeBuildProjectEnvironmentRegistryCredential
 * //                   Credential: "STRING_VALUE",
 * //                   CredentialProvider: "STRING_VALUE",
 * //                 },
 * //                 Type: "STRING_VALUE",
 * //               },
 * //               Name: "STRING_VALUE",
 * //               Source: { // AwsCodeBuildProjectSource
 * //                 Type: "STRING_VALUE",
 * //                 Location: "STRING_VALUE",
 * //                 GitCloneDepth: Number("int"),
 * //                 InsecureSsl: true || false,
 * //               },
 * //               ServiceRole: "STRING_VALUE",
 * //               LogsConfig: { // AwsCodeBuildProjectLogsConfigDetails
 * //                 CloudWatchLogs: { // AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails
 * //                   GroupName: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                   StreamName: "STRING_VALUE",
 * //                 },
 * //                 S3Logs: { // AwsCodeBuildProjectLogsConfigS3LogsDetails
 * //                   EncryptionDisabled: true || false,
 * //                   Location: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               },
 * //               VpcConfig: { // AwsCodeBuildProjectVpcConfig
 * //                 VpcId: "STRING_VALUE",
 * //                 Subnets: [ // NonEmptyStringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SecurityGroupIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               SecondaryArtifacts: [
 * //                 {
 * //                   ArtifactIdentifier: "STRING_VALUE",
 * //                   EncryptionDisabled: true || false,
 * //                   Location: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   NamespaceType: "STRING_VALUE",
 * //                   OverrideArtifactName: true || false,
 * //                   Packaging: "STRING_VALUE",
 * //                   Path: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsCloudFrontDistribution: { // AwsCloudFrontDistributionDetails
 * //               CacheBehaviors: { // AwsCloudFrontDistributionCacheBehaviors
 * //                 Items: [ // AwsCloudFrontDistributionCacheBehaviorsItemList
 * //                   { // AwsCloudFrontDistributionCacheBehavior
 * //                     ViewerProtocolPolicy: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               DefaultCacheBehavior: { // AwsCloudFrontDistributionDefaultCacheBehavior
 * //                 ViewerProtocolPolicy: "STRING_VALUE",
 * //               },
 * //               DefaultRootObject: "STRING_VALUE",
 * //               DomainName: "STRING_VALUE",
 * //               ETag: "STRING_VALUE",
 * //               LastModifiedTime: "STRING_VALUE",
 * //               Logging: { // AwsCloudFrontDistributionLogging
 * //                 Bucket: "STRING_VALUE",
 * //                 Enabled: true || false,
 * //                 IncludeCookies: true || false,
 * //                 Prefix: "STRING_VALUE",
 * //               },
 * //               Origins: { // AwsCloudFrontDistributionOrigins
 * //                 Items: [ // AwsCloudFrontDistributionOriginItemList
 * //                   { // AwsCloudFrontDistributionOriginItem
 * //                     DomainName: "STRING_VALUE",
 * //                     Id: "STRING_VALUE",
 * //                     OriginPath: "STRING_VALUE",
 * //                     S3OriginConfig: { // AwsCloudFrontDistributionOriginS3OriginConfig
 * //                       OriginAccessIdentity: "STRING_VALUE",
 * //                     },
 * //                     CustomOriginConfig: { // AwsCloudFrontDistributionOriginCustomOriginConfig
 * //                       HttpPort: Number("int"),
 * //                       HttpsPort: Number("int"),
 * //                       OriginKeepaliveTimeout: Number("int"),
 * //                       OriginProtocolPolicy: "STRING_VALUE",
 * //                       OriginReadTimeout: Number("int"),
 * //                       OriginSslProtocols: { // AwsCloudFrontDistributionOriginSslProtocols
 * //                         Items: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                         Quantity: Number("int"),
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               OriginGroups: { // AwsCloudFrontDistributionOriginGroups
 * //                 Items: [ // AwsCloudFrontDistributionOriginGroupsItemList
 * //                   { // AwsCloudFrontDistributionOriginGroup
 * //                     FailoverCriteria: { // AwsCloudFrontDistributionOriginGroupFailover
 * //                       StatusCodes: { // AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
 * //                         Items: [ // AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList
 * //                           Number("int"),
 * //                         ],
 * //                         Quantity: Number("int"),
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               ViewerCertificate: { // AwsCloudFrontDistributionViewerCertificate
 * //                 AcmCertificateArn: "STRING_VALUE",
 * //                 Certificate: "STRING_VALUE",
 * //                 CertificateSource: "STRING_VALUE",
 * //                 CloudFrontDefaultCertificate: true || false,
 * //                 IamCertificateId: "STRING_VALUE",
 * //                 MinimumProtocolVersion: "STRING_VALUE",
 * //                 SslSupportMethod: "STRING_VALUE",
 * //               },
 * //               Status: "STRING_VALUE",
 * //               WebAclId: "STRING_VALUE",
 * //             },
 * //             AwsEc2Instance: { // AwsEc2InstanceDetails
 * //               Type: "STRING_VALUE",
 * //               ImageId: "STRING_VALUE",
 * //               IpV4Addresses: "<StringList>",
 * //               IpV6Addresses: "<StringList>",
 * //               KeyName: "STRING_VALUE",
 * //               IamInstanceProfileArn: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               SubnetId: "STRING_VALUE",
 * //               LaunchedAt: "STRING_VALUE",
 * //               NetworkInterfaces: [ // AwsEc2InstanceNetworkInterfacesList
 * //                 { // AwsEc2InstanceNetworkInterfacesDetails
 * //                   NetworkInterfaceId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               VirtualizationType: "STRING_VALUE",
 * //               MetadataOptions: { // AwsEc2InstanceMetadataOptions
 * //                 HttpEndpoint: "STRING_VALUE",
 * //                 HttpProtocolIpv6: "STRING_VALUE",
 * //                 HttpPutResponseHopLimit: Number("int"),
 * //                 HttpTokens: "STRING_VALUE",
 * //                 InstanceMetadataTags: "STRING_VALUE",
 * //               },
 * //               Monitoring: { // AwsEc2InstanceMonitoringDetails
 * //                 State: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsEc2NetworkInterface: { // AwsEc2NetworkInterfaceDetails
 * //               Attachment: { // AwsEc2NetworkInterfaceAttachment
 * //                 AttachTime: "STRING_VALUE",
 * //                 AttachmentId: "STRING_VALUE",
 * //                 DeleteOnTermination: true || false,
 * //                 DeviceIndex: Number("int"),
 * //                 InstanceId: "STRING_VALUE",
 * //                 InstanceOwnerId: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //               },
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               SecurityGroups: [ // AwsEc2NetworkInterfaceSecurityGroupList
 * //                 { // AwsEc2NetworkInterfaceSecurityGroup
 * //                   GroupName: "STRING_VALUE",
 * //                   GroupId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               SourceDestCheck: true || false,
 * //               IpV6Addresses: [ // AwsEc2NetworkInterfaceIpV6AddressList
 * //                 { // AwsEc2NetworkInterfaceIpV6AddressDetail
 * //                   IpV6Address: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PrivateIpAddresses: [ // AwsEc2NetworkInterfacePrivateIpAddressList
 * //                 { // AwsEc2NetworkInterfacePrivateIpAddressDetail
 * //                   PrivateIpAddress: "STRING_VALUE",
 * //                   PrivateDnsName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PublicDnsName: "STRING_VALUE",
 * //               PublicIp: "STRING_VALUE",
 * //             },
 * //             AwsEc2SecurityGroup: { // AwsEc2SecurityGroupDetails
 * //               GroupName: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               OwnerId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               IpPermissions: [ // AwsEc2SecurityGroupIpPermissionList
 * //                 { // AwsEc2SecurityGroupIpPermission
 * //                   IpProtocol: "STRING_VALUE",
 * //                   FromPort: Number("int"),
 * //                   ToPort: Number("int"),
 * //                   UserIdGroupPairs: [ // AwsEc2SecurityGroupUserIdGroupPairList
 * //                     { // AwsEc2SecurityGroupUserIdGroupPair
 * //                       GroupId: "STRING_VALUE",
 * //                       GroupName: "STRING_VALUE",
 * //                       PeeringStatus: "STRING_VALUE",
 * //                       UserId: "STRING_VALUE",
 * //                       VpcId: "STRING_VALUE",
 * //                       VpcPeeringConnectionId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   IpRanges: [ // AwsEc2SecurityGroupIpRangeList
 * //                     { // AwsEc2SecurityGroupIpRange
 * //                       CidrIp: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Ipv6Ranges: [ // AwsEc2SecurityGroupIpv6RangeList
 * //                     { // AwsEc2SecurityGroupIpv6Range
 * //                       CidrIpv6: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   PrefixListIds: [ // AwsEc2SecurityGroupPrefixListIdList
 * //                     { // AwsEc2SecurityGroupPrefixListId
 * //                       PrefixListId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               IpPermissionsEgress: [
 * //                 {
 * //                   IpProtocol: "STRING_VALUE",
 * //                   FromPort: Number("int"),
 * //                   ToPort: Number("int"),
 * //                   UserIdGroupPairs: [
 * //                     {
 * //                       GroupId: "STRING_VALUE",
 * //                       GroupName: "STRING_VALUE",
 * //                       PeeringStatus: "STRING_VALUE",
 * //                       UserId: "STRING_VALUE",
 * //                       VpcId: "STRING_VALUE",
 * //                       VpcPeeringConnectionId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   IpRanges: [
 * //                     {
 * //                       CidrIp: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Ipv6Ranges: [
 * //                     {
 * //                       CidrIpv6: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   PrefixListIds: [
 * //                     {
 * //                       PrefixListId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //             AwsEc2Volume: { // AwsEc2VolumeDetails
 * //               CreateTime: "STRING_VALUE",
 * //               DeviceName: "STRING_VALUE",
 * //               Encrypted: true || false,
 * //               Size: Number("int"),
 * //               SnapshotId: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               Attachments: [ // AwsEc2VolumeAttachmentList
 * //                 { // AwsEc2VolumeAttachment
 * //                   AttachTime: "STRING_VALUE",
 * //                   DeleteOnTermination: true || false,
 * //                   InstanceId: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               VolumeId: "STRING_VALUE",
 * //               VolumeType: "STRING_VALUE",
 * //               VolumeScanStatus: "STRING_VALUE",
 * //             },
 * //             AwsEc2Vpc: { // AwsEc2VpcDetails
 * //               CidrBlockAssociationSet: [ // CidrBlockAssociationList
 * //                 { // CidrBlockAssociation
 * //                   AssociationId: "STRING_VALUE",
 * //                   CidrBlock: "STRING_VALUE",
 * //                   CidrBlockState: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Ipv6CidrBlockAssociationSet: [ // Ipv6CidrBlockAssociationList
 * //                 { // Ipv6CidrBlockAssociation
 * //                   AssociationId: "STRING_VALUE",
 * //                   Ipv6CidrBlock: "STRING_VALUE",
 * //                   CidrBlockState: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               DhcpOptionsId: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //             },
 * //             AwsEc2Eip: { // AwsEc2EipDetails
 * //               InstanceId: "STRING_VALUE",
 * //               PublicIp: "STRING_VALUE",
 * //               AllocationId: "STRING_VALUE",
 * //               AssociationId: "STRING_VALUE",
 * //               Domain: "STRING_VALUE",
 * //               PublicIpv4Pool: "STRING_VALUE",
 * //               NetworkBorderGroup: "STRING_VALUE",
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               NetworkInterfaceOwnerId: "STRING_VALUE",
 * //               PrivateIpAddress: "STRING_VALUE",
 * //             },
 * //             AwsEc2Subnet: { // AwsEc2SubnetDetails
 * //               AssignIpv6AddressOnCreation: true || false,
 * //               AvailabilityZone: "STRING_VALUE",
 * //               AvailabilityZoneId: "STRING_VALUE",
 * //               AvailableIpAddressCount: Number("int"),
 * //               CidrBlock: "STRING_VALUE",
 * //               DefaultForAz: true || false,
 * //               MapPublicIpOnLaunch: true || false,
 * //               OwnerId: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               SubnetArn: "STRING_VALUE",
 * //               SubnetId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               Ipv6CidrBlockAssociationSet: [
 * //                 {
 * //                   AssociationId: "STRING_VALUE",
 * //                   Ipv6CidrBlock: "STRING_VALUE",
 * //                   CidrBlockState: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsEc2NetworkAcl: { // AwsEc2NetworkAclDetails
 * //               IsDefault: true || false,
 * //               NetworkAclId: "STRING_VALUE",
 * //               OwnerId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               Associations: [ // AwsEc2NetworkAclAssociationList
 * //                 { // AwsEc2NetworkAclAssociation
 * //                   NetworkAclAssociationId: "STRING_VALUE",
 * //                   NetworkAclId: "STRING_VALUE",
 * //                   SubnetId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Entries: [ // AwsEc2NetworkAclEntryList
 * //                 { // AwsEc2NetworkAclEntry
 * //                   CidrBlock: "STRING_VALUE",
 * //                   Egress: true || false,
 * //                   IcmpTypeCode: { // IcmpTypeCode
 * //                     Code: Number("int"),
 * //                     Type: Number("int"),
 * //                   },
 * //                   Ipv6CidrBlock: "STRING_VALUE",
 * //                   PortRange: { // PortRangeFromTo
 * //                     From: Number("int"),
 * //                     To: Number("int"),
 * //                   },
 * //                   Protocol: "STRING_VALUE",
 * //                   RuleAction: "STRING_VALUE",
 * //                   RuleNumber: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //             AwsElbv2LoadBalancer: { // AwsElbv2LoadBalancerDetails
 * //               AvailabilityZones: [ // AvailabilityZones
 * //                 { // AvailabilityZone
 * //                   ZoneName: "STRING_VALUE",
 * //                   SubnetId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CanonicalHostedZoneId: "STRING_VALUE",
 * //               CreatedTime: "STRING_VALUE",
 * //               DNSName: "STRING_VALUE",
 * //               IpAddressType: "STRING_VALUE",
 * //               Scheme: "STRING_VALUE",
 * //               SecurityGroups: [ // SecurityGroups
 * //                 "STRING_VALUE",
 * //               ],
 * //               State: { // LoadBalancerState
 * //                 Code: "STRING_VALUE",
 * //                 Reason: "STRING_VALUE",
 * //               },
 * //               Type: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               LoadBalancerAttributes: [ // AwsElbv2LoadBalancerAttributes
 * //                 { // AwsElbv2LoadBalancerAttribute
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsElasticBeanstalkEnvironment: { // AwsElasticBeanstalkEnvironmentDetails
 * //               ApplicationName: "STRING_VALUE",
 * //               Cname: "STRING_VALUE",
 * //               DateCreated: "STRING_VALUE",
 * //               DateUpdated: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               EndpointUrl: "STRING_VALUE",
 * //               EnvironmentArn: "STRING_VALUE",
 * //               EnvironmentId: "STRING_VALUE",
 * //               EnvironmentLinks: [ // AwsElasticBeanstalkEnvironmentEnvironmentLinks
 * //                 { // AwsElasticBeanstalkEnvironmentEnvironmentLink
 * //                   EnvironmentName: "STRING_VALUE",
 * //                   LinkName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               EnvironmentName: "STRING_VALUE",
 * //               OptionSettings: [ // AwsElasticBeanstalkEnvironmentOptionSettings
 * //                 { // AwsElasticBeanstalkEnvironmentOptionSetting
 * //                   Namespace: "STRING_VALUE",
 * //                   OptionName: "STRING_VALUE",
 * //                   ResourceName: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PlatformArn: "STRING_VALUE",
 * //               SolutionStackName: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               Tier: { // AwsElasticBeanstalkEnvironmentTier
 * //                 Name: "STRING_VALUE",
 * //                 Type: "STRING_VALUE",
 * //                 Version: "STRING_VALUE",
 * //               },
 * //               VersionLabel: "STRING_VALUE",
 * //             },
 * //             AwsElasticsearchDomain: { // AwsElasticsearchDomainDetails
 * //               AccessPolicies: "STRING_VALUE",
 * //               DomainEndpointOptions: { // AwsElasticsearchDomainDomainEndpointOptions
 * //                 EnforceHTTPS: true || false,
 * //                 TLSSecurityPolicy: "STRING_VALUE",
 * //               },
 * //               DomainId: "STRING_VALUE",
 * //               DomainName: "STRING_VALUE",
 * //               Endpoint: "STRING_VALUE",
 * //               Endpoints: "<FieldMap>",
 * //               ElasticsearchVersion: "STRING_VALUE",
 * //               ElasticsearchClusterConfig: { // AwsElasticsearchDomainElasticsearchClusterConfigDetails
 * //                 DedicatedMasterCount: Number("int"),
 * //                 DedicatedMasterEnabled: true || false,
 * //                 DedicatedMasterType: "STRING_VALUE",
 * //                 InstanceCount: Number("int"),
 * //                 InstanceType: "STRING_VALUE",
 * //                 ZoneAwarenessConfig: { // AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
 * //                   AvailabilityZoneCount: Number("int"),
 * //                 },
 * //                 ZoneAwarenessEnabled: true || false,
 * //               },
 * //               EncryptionAtRestOptions: { // AwsElasticsearchDomainEncryptionAtRestOptions
 * //                 Enabled: true || false,
 * //                 KmsKeyId: "STRING_VALUE",
 * //               },
 * //               LogPublishingOptions: { // AwsElasticsearchDomainLogPublishingOptions
 * //                 IndexSlowLogs: { // AwsElasticsearchDomainLogPublishingOptionsLogConfig
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //                 SearchSlowLogs: {
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //                 AuditLogs: {
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               NodeToNodeEncryptionOptions: { // AwsElasticsearchDomainNodeToNodeEncryptionOptions
 * //                 Enabled: true || false,
 * //               },
 * //               ServiceSoftwareOptions: { // AwsElasticsearchDomainServiceSoftwareOptions
 * //                 AutomatedUpdateDate: "STRING_VALUE",
 * //                 Cancellable: true || false,
 * //                 CurrentVersion: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //                 NewVersion: "STRING_VALUE",
 * //                 UpdateAvailable: true || false,
 * //                 UpdateStatus: "STRING_VALUE",
 * //               },
 * //               VPCOptions: { // AwsElasticsearchDomainVPCOptions
 * //                 AvailabilityZones: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SecurityGroupIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SubnetIds: "<NonEmptyStringList>",
 * //                 VPCId: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsS3Bucket: { // AwsS3BucketDetails
 * //               OwnerId: "STRING_VALUE",
 * //               OwnerName: "STRING_VALUE",
 * //               OwnerAccountId: "STRING_VALUE",
 * //               CreatedAt: "STRING_VALUE",
 * //               ServerSideEncryptionConfiguration: { // AwsS3BucketServerSideEncryptionConfiguration
 * //                 Rules: [ // AwsS3BucketServerSideEncryptionRules
 * //                   { // AwsS3BucketServerSideEncryptionRule
 * //                     ApplyServerSideEncryptionByDefault: { // AwsS3BucketServerSideEncryptionByDefault
 * //                       SSEAlgorithm: "STRING_VALUE",
 * //                       KMSMasterKeyID: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               BucketLifecycleConfiguration: { // AwsS3BucketBucketLifecycleConfigurationDetails
 * //                 Rules: [ // AwsS3BucketBucketLifecycleConfigurationRulesList
 * //                   { // AwsS3BucketBucketLifecycleConfigurationRulesDetails
 * //                     AbortIncompleteMultipartUpload: { // AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
 * //                       DaysAfterInitiation: Number("int"),
 * //                     },
 * //                     ExpirationDate: "STRING_VALUE",
 * //                     ExpirationInDays: Number("int"),
 * //                     ExpiredObjectDeleteMarker: true || false,
 * //                     Filter: { // AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
 * //                       Predicate: { // AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
 * //                         Operands: [ // AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList
 * //                           { // AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
 * //                             Prefix: "STRING_VALUE",
 * //                             Tag: { // AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
 * //                               Key: "STRING_VALUE",
 * //                               Value: "STRING_VALUE",
 * //                             },
 * //                             Type: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                         Prefix: "STRING_VALUE",
 * //                         Tag: { // AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
 * //                           Key: "STRING_VALUE",
 * //                           Value: "STRING_VALUE",
 * //                         },
 * //                         Type: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     ID: "STRING_VALUE",
 * //                     NoncurrentVersionExpirationInDays: Number("int"),
 * //                     NoncurrentVersionTransitions: [ // AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList
 * //                       { // AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
 * //                         Days: Number("int"),
 * //                         StorageClass: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     Prefix: "STRING_VALUE",
 * //                     Status: "STRING_VALUE",
 * //                     Transitions: [ // AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList
 * //                       { // AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
 * //                         Date: "STRING_VALUE",
 * //                         Days: Number("int"),
 * //                         StorageClass: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //               PublicAccessBlockConfiguration: { // AwsS3AccountPublicAccessBlockDetails
 * //                 BlockPublicAcls: true || false,
 * //                 BlockPublicPolicy: true || false,
 * //                 IgnorePublicAcls: true || false,
 * //                 RestrictPublicBuckets: true || false,
 * //               },
 * //               AccessControlList: "STRING_VALUE",
 * //               BucketLoggingConfiguration: { // AwsS3BucketLoggingConfiguration
 * //                 DestinationBucketName: "STRING_VALUE",
 * //                 LogFilePrefix: "STRING_VALUE",
 * //               },
 * //               BucketWebsiteConfiguration: { // AwsS3BucketWebsiteConfiguration
 * //                 ErrorDocument: "STRING_VALUE",
 * //                 IndexDocumentSuffix: "STRING_VALUE",
 * //                 RedirectAllRequestsTo: { // AwsS3BucketWebsiteConfigurationRedirectTo
 * //                   Hostname: "STRING_VALUE",
 * //                   Protocol: "STRING_VALUE",
 * //                 },
 * //                 RoutingRules: [ // AwsS3BucketWebsiteConfigurationRoutingRules
 * //                   { // AwsS3BucketWebsiteConfigurationRoutingRule
 * //                     Condition: { // AwsS3BucketWebsiteConfigurationRoutingRuleCondition
 * //                       HttpErrorCodeReturnedEquals: "STRING_VALUE",
 * //                       KeyPrefixEquals: "STRING_VALUE",
 * //                     },
 * //                     Redirect: { // AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
 * //                       Hostname: "STRING_VALUE",
 * //                       HttpRedirectCode: "STRING_VALUE",
 * //                       Protocol: "STRING_VALUE",
 * //                       ReplaceKeyPrefixWith: "STRING_VALUE",
 * //                       ReplaceKeyWith: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               BucketNotificationConfiguration: { // AwsS3BucketNotificationConfiguration
 * //                 Configurations: [ // AwsS3BucketNotificationConfigurationDetails
 * //                   { // AwsS3BucketNotificationConfigurationDetail
 * //                     Events: [ // AwsS3BucketNotificationConfigurationEvents
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Filter: { // AwsS3BucketNotificationConfigurationFilter
 * //                       S3KeyFilter: { // AwsS3BucketNotificationConfigurationS3KeyFilter
 * //                         FilterRules: [ // AwsS3BucketNotificationConfigurationS3KeyFilterRules
 * //                           { // AwsS3BucketNotificationConfigurationS3KeyFilterRule
 * //                             Name: "Prefix" || "Suffix",
 * //                             Value: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     Destination: "STRING_VALUE",
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               BucketVersioningConfiguration: { // AwsS3BucketBucketVersioningConfiguration
 * //                 IsMfaDeleteEnabled: true || false,
 * //                 Status: "STRING_VALUE",
 * //               },
 * //               ObjectLockConfiguration: { // AwsS3BucketObjectLockConfiguration
 * //                 ObjectLockEnabled: "STRING_VALUE",
 * //                 Rule: { // AwsS3BucketObjectLockConfigurationRuleDetails
 * //                   DefaultRetention: { // AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails
 * //                     Days: Number("int"),
 * //                     Mode: "STRING_VALUE",
 * //                     Years: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //               Name: "STRING_VALUE",
 * //             },
 * //             AwsS3AccountPublicAccessBlock: {
 * //               BlockPublicAcls: true || false,
 * //               BlockPublicPolicy: true || false,
 * //               IgnorePublicAcls: true || false,
 * //               RestrictPublicBuckets: true || false,
 * //             },
 * //             AwsS3Object: { // AwsS3ObjectDetails
 * //               LastModified: "STRING_VALUE",
 * //               ETag: "STRING_VALUE",
 * //               VersionId: "STRING_VALUE",
 * //               ContentType: "STRING_VALUE",
 * //               ServerSideEncryption: "STRING_VALUE",
 * //               SSEKMSKeyId: "STRING_VALUE",
 * //             },
 * //             AwsSecretsManagerSecret: { // AwsSecretsManagerSecretDetails
 * //               RotationRules: { // AwsSecretsManagerSecretRotationRules
 * //                 AutomaticallyAfterDays: Number("int"),
 * //               },
 * //               RotationOccurredWithinFrequency: true || false,
 * //               KmsKeyId: "STRING_VALUE",
 * //               RotationEnabled: true || false,
 * //               RotationLambdaArn: "STRING_VALUE",
 * //               Deleted: true || false,
 * //               Name: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //             AwsIamAccessKey: { // AwsIamAccessKeyDetails
 * //               UserName: "STRING_VALUE",
 * //               Status: "Active" || "Inactive",
 * //               CreatedAt: "STRING_VALUE",
 * //               PrincipalId: "STRING_VALUE",
 * //               PrincipalType: "STRING_VALUE",
 * //               PrincipalName: "STRING_VALUE",
 * //               AccountId: "STRING_VALUE",
 * //               AccessKeyId: "STRING_VALUE",
 * //               SessionContext: { // AwsIamAccessKeySessionContext
 * //                 Attributes: { // AwsIamAccessKeySessionContextAttributes
 * //                   MfaAuthenticated: true || false,
 * //                   CreationDate: "STRING_VALUE",
 * //                 },
 * //                 SessionIssuer: { // AwsIamAccessKeySessionContextSessionIssuer
 * //                   Type: "STRING_VALUE",
 * //                   PrincipalId: "STRING_VALUE",
 * //                   Arn: "STRING_VALUE",
 * //                   AccountId: "STRING_VALUE",
 * //                   UserName: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             AwsIamUser: { // AwsIamUserDetails
 * //               AttachedManagedPolicies: [ // AwsIamAttachedManagedPolicyList
 * //                 { // AwsIamAttachedManagedPolicy
 * //                   PolicyName: "STRING_VALUE",
 * //                   PolicyArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CreateDate: "STRING_VALUE",
 * //               GroupList: "<StringList>",
 * //               Path: "STRING_VALUE",
 * //               PermissionsBoundary: { // AwsIamPermissionsBoundary
 * //                 PermissionsBoundaryArn: "STRING_VALUE",
 * //                 PermissionsBoundaryType: "STRING_VALUE",
 * //               },
 * //               UserId: "STRING_VALUE",
 * //               UserName: "STRING_VALUE",
 * //               UserPolicyList: [ // AwsIamUserPolicyList
 * //                 { // AwsIamUserPolicy
 * //                   PolicyName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsIamPolicy: { // AwsIamPolicyDetails
 * //               AttachmentCount: Number("int"),
 * //               CreateDate: "STRING_VALUE",
 * //               DefaultVersionId: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               IsAttachable: true || false,
 * //               Path: "STRING_VALUE",
 * //               PermissionsBoundaryUsageCount: Number("int"),
 * //               PolicyId: "STRING_VALUE",
 * //               PolicyName: "STRING_VALUE",
 * //               PolicyVersionList: [ // AwsIamPolicyVersionList
 * //                 { // AwsIamPolicyVersion
 * //                   VersionId: "STRING_VALUE",
 * //                   IsDefaultVersion: true || false,
 * //                   CreateDate: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               UpdateDate: "STRING_VALUE",
 * //             },
 * //             AwsApiGatewayV2Stage: { // AwsApiGatewayV2StageDetails
 * //               ClientCertificateId: "STRING_VALUE",
 * //               CreatedDate: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               DefaultRouteSettings: { // AwsApiGatewayV2RouteSettings
 * //                 DetailedMetricsEnabled: true || false,
 * //                 LoggingLevel: "STRING_VALUE",
 * //                 DataTraceEnabled: true || false,
 * //                 ThrottlingBurstLimit: Number("int"),
 * //                 ThrottlingRateLimit: Number("double"),
 * //               },
 * //               DeploymentId: "STRING_VALUE",
 * //               LastUpdatedDate: "STRING_VALUE",
 * //               RouteSettings: {
 * //                 DetailedMetricsEnabled: true || false,
 * //                 LoggingLevel: "STRING_VALUE",
 * //                 DataTraceEnabled: true || false,
 * //                 ThrottlingBurstLimit: Number("int"),
 * //                 ThrottlingRateLimit: Number("double"),
 * //               },
 * //               StageName: "STRING_VALUE",
 * //               StageVariables: "<FieldMap>",
 * //               AccessLogSettings: { // AwsApiGatewayAccessLogSettings
 * //                 Format: "STRING_VALUE",
 * //                 DestinationArn: "STRING_VALUE",
 * //               },
 * //               AutoDeploy: true || false,
 * //               LastDeploymentStatusMessage: "STRING_VALUE",
 * //               ApiGatewayManaged: true || false,
 * //             },
 * //             AwsApiGatewayV2Api: { // AwsApiGatewayV2ApiDetails
 * //               ApiEndpoint: "STRING_VALUE",
 * //               ApiId: "STRING_VALUE",
 * //               ApiKeySelectionExpression: "STRING_VALUE",
 * //               CreatedDate: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               ProtocolType: "STRING_VALUE",
 * //               RouteSelectionExpression: "STRING_VALUE",
 * //               CorsConfiguration: { // AwsCorsConfiguration
 * //                 AllowOrigins: "<NonEmptyStringList>",
 * //                 AllowCredentials: true || false,
 * //                 ExposeHeaders: "<NonEmptyStringList>",
 * //                 MaxAge: Number("int"),
 * //                 AllowMethods: "<NonEmptyStringList>",
 * //                 AllowHeaders: "<NonEmptyStringList>",
 * //               },
 * //             },
 * //             AwsDynamoDbTable: { // AwsDynamoDbTableDetails
 * //               AttributeDefinitions: [ // AwsDynamoDbTableAttributeDefinitionList
 * //                 { // AwsDynamoDbTableAttributeDefinition
 * //                   AttributeName: "STRING_VALUE",
 * //                   AttributeType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               BillingModeSummary: { // AwsDynamoDbTableBillingModeSummary
 * //                 BillingMode: "STRING_VALUE",
 * //                 LastUpdateToPayPerRequestDateTime: "STRING_VALUE",
 * //               },
 * //               CreationDateTime: "STRING_VALUE",
 * //               GlobalSecondaryIndexes: [ // AwsDynamoDbTableGlobalSecondaryIndexList
 * //                 { // AwsDynamoDbTableGlobalSecondaryIndex
 * //                   Backfilling: true || false,
 * //                   IndexArn: "STRING_VALUE",
 * //                   IndexName: "STRING_VALUE",
 * //                   IndexSizeBytes: Number("long"),
 * //                   IndexStatus: "STRING_VALUE",
 * //                   ItemCount: Number("int"),
 * //                   KeySchema: [ // AwsDynamoDbTableKeySchemaList
 * //                     { // AwsDynamoDbTableKeySchema
 * //                       AttributeName: "STRING_VALUE",
 * //                       KeyType: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Projection: { // AwsDynamoDbTableProjection
 * //                     NonKeyAttributes: "<StringList>",
 * //                     ProjectionType: "STRING_VALUE",
 * //                   },
 * //                   ProvisionedThroughput: { // AwsDynamoDbTableProvisionedThroughput
 * //                     LastDecreaseDateTime: "STRING_VALUE",
 * //                     LastIncreaseDateTime: "STRING_VALUE",
 * //                     NumberOfDecreasesToday: Number("int"),
 * //                     ReadCapacityUnits: Number("int"),
 * //                     WriteCapacityUnits: Number("int"),
 * //                   },
 * //                 },
 * //               ],
 * //               GlobalTableVersion: "STRING_VALUE",
 * //               ItemCount: Number("int"),
 * //               KeySchema: [
 * //                 {
 * //                   AttributeName: "STRING_VALUE",
 * //                   KeyType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               LatestStreamArn: "STRING_VALUE",
 * //               LatestStreamLabel: "STRING_VALUE",
 * //               LocalSecondaryIndexes: [ // AwsDynamoDbTableLocalSecondaryIndexList
 * //                 { // AwsDynamoDbTableLocalSecondaryIndex
 * //                   IndexArn: "STRING_VALUE",
 * //                   IndexName: "STRING_VALUE",
 * //                   KeySchema: [
 * //                     {
 * //                       AttributeName: "STRING_VALUE",
 * //                       KeyType: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Projection: {
 * //                     NonKeyAttributes: "<StringList>",
 * //                     ProjectionType: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               ProvisionedThroughput: {
 * //                 LastDecreaseDateTime: "STRING_VALUE",
 * //                 LastIncreaseDateTime: "STRING_VALUE",
 * //                 NumberOfDecreasesToday: Number("int"),
 * //                 ReadCapacityUnits: Number("int"),
 * //                 WriteCapacityUnits: Number("int"),
 * //               },
 * //               Replicas: [ // AwsDynamoDbTableReplicaList
 * //                 { // AwsDynamoDbTableReplica
 * //                   GlobalSecondaryIndexes: [ // AwsDynamoDbTableReplicaGlobalSecondaryIndexList
 * //                     { // AwsDynamoDbTableReplicaGlobalSecondaryIndex
 * //                       IndexName: "STRING_VALUE",
 * //                       ProvisionedThroughputOverride: { // AwsDynamoDbTableProvisionedThroughputOverride
 * //                         ReadCapacityUnits: Number("int"),
 * //                       },
 * //                     },
 * //                   ],
 * //                   KmsMasterKeyId: "STRING_VALUE",
 * //                   ProvisionedThroughputOverride: {
 * //                     ReadCapacityUnits: Number("int"),
 * //                   },
 * //                   RegionName: "STRING_VALUE",
 * //                   ReplicaStatus: "STRING_VALUE",
 * //                   ReplicaStatusDescription: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RestoreSummary: { // AwsDynamoDbTableRestoreSummary
 * //                 SourceBackupArn: "STRING_VALUE",
 * //                 SourceTableArn: "STRING_VALUE",
 * //                 RestoreDateTime: "STRING_VALUE",
 * //                 RestoreInProgress: true || false,
 * //               },
 * //               SseDescription: { // AwsDynamoDbTableSseDescription
 * //                 InaccessibleEncryptionDateTime: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //                 SseType: "STRING_VALUE",
 * //                 KmsMasterKeyArn: "STRING_VALUE",
 * //               },
 * //               StreamSpecification: { // AwsDynamoDbTableStreamSpecification
 * //                 StreamEnabled: true || false,
 * //                 StreamViewType: "STRING_VALUE",
 * //               },
 * //               TableId: "STRING_VALUE",
 * //               TableName: "STRING_VALUE",
 * //               TableSizeBytes: Number("long"),
 * //               TableStatus: "STRING_VALUE",
 * //               DeletionProtectionEnabled: true || false,
 * //             },
 * //             AwsApiGatewayStage: { // AwsApiGatewayStageDetails
 * //               DeploymentId: "STRING_VALUE",
 * //               ClientCertificateId: "STRING_VALUE",
 * //               StageName: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               CacheClusterEnabled: true || false,
 * //               CacheClusterSize: "STRING_VALUE",
 * //               CacheClusterStatus: "STRING_VALUE",
 * //               MethodSettings: [ // AwsApiGatewayMethodSettingsList
 * //                 { // AwsApiGatewayMethodSettings
 * //                   MetricsEnabled: true || false,
 * //                   LoggingLevel: "STRING_VALUE",
 * //                   DataTraceEnabled: true || false,
 * //                   ThrottlingBurstLimit: Number("int"),
 * //                   ThrottlingRateLimit: Number("double"),
 * //                   CachingEnabled: true || false,
 * //                   CacheTtlInSeconds: Number("int"),
 * //                   CacheDataEncrypted: true || false,
 * //                   RequireAuthorizationForCacheControl: true || false,
 * //                   UnauthorizedCacheControlHeaderStrategy: "STRING_VALUE",
 * //                   HttpMethod: "STRING_VALUE",
 * //                   ResourcePath: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Variables: "<FieldMap>",
 * //               DocumentationVersion: "STRING_VALUE",
 * //               AccessLogSettings: {
 * //                 Format: "STRING_VALUE",
 * //                 DestinationArn: "STRING_VALUE",
 * //               },
 * //               CanarySettings: { // AwsApiGatewayCanarySettings
 * //                 PercentTraffic: Number("double"),
 * //                 DeploymentId: "STRING_VALUE",
 * //                 StageVariableOverrides: "<FieldMap>",
 * //                 UseStageCache: true || false,
 * //               },
 * //               TracingEnabled: true || false,
 * //               CreatedDate: "STRING_VALUE",
 * //               LastUpdatedDate: "STRING_VALUE",
 * //               WebAclArn: "STRING_VALUE",
 * //             },
 * //             AwsApiGatewayRestApi: { // AwsApiGatewayRestApiDetails
 * //               Id: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               CreatedDate: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //               BinaryMediaTypes: "<NonEmptyStringList>",
 * //               MinimumCompressionSize: Number("int"),
 * //               ApiKeySource: "STRING_VALUE",
 * //               EndpointConfiguration: { // AwsApiGatewayEndpointConfiguration
 * //                 Types: "<NonEmptyStringList>",
 * //               },
 * //             },
 * //             AwsCloudTrailTrail: { // AwsCloudTrailTrailDetails
 * //               CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //               CloudWatchLogsRoleArn: "STRING_VALUE",
 * //               HasCustomEventSelectors: true || false,
 * //               HomeRegion: "STRING_VALUE",
 * //               IncludeGlobalServiceEvents: true || false,
 * //               IsMultiRegionTrail: true || false,
 * //               IsOrganizationTrail: true || false,
 * //               KmsKeyId: "STRING_VALUE",
 * //               LogFileValidationEnabled: true || false,
 * //               Name: "STRING_VALUE",
 * //               S3BucketName: "STRING_VALUE",
 * //               S3KeyPrefix: "STRING_VALUE",
 * //               SnsTopicArn: "STRING_VALUE",
 * //               SnsTopicName: "STRING_VALUE",
 * //               TrailArn: "STRING_VALUE",
 * //             },
 * //             AwsSsmPatchCompliance: { // AwsSsmPatchComplianceDetails
 * //               Patch: { // AwsSsmPatch
 * //                 ComplianceSummary: { // AwsSsmComplianceSummary
 * //                   Status: "STRING_VALUE",
 * //                   CompliantCriticalCount: Number("int"),
 * //                   CompliantHighCount: Number("int"),
 * //                   CompliantMediumCount: Number("int"),
 * //                   ExecutionType: "STRING_VALUE",
 * //                   NonCompliantCriticalCount: Number("int"),
 * //                   CompliantInformationalCount: Number("int"),
 * //                   NonCompliantInformationalCount: Number("int"),
 * //                   CompliantUnspecifiedCount: Number("int"),
 * //                   NonCompliantLowCount: Number("int"),
 * //                   NonCompliantHighCount: Number("int"),
 * //                   CompliantLowCount: Number("int"),
 * //                   ComplianceType: "STRING_VALUE",
 * //                   PatchBaselineId: "STRING_VALUE",
 * //                   OverallSeverity: "STRING_VALUE",
 * //                   NonCompliantMediumCount: Number("int"),
 * //                   NonCompliantUnspecifiedCount: Number("int"),
 * //                   PatchGroup: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             AwsCertificateManagerCertificate: { // AwsCertificateManagerCertificateDetails
 * //               CertificateAuthorityArn: "STRING_VALUE",
 * //               CreatedAt: "STRING_VALUE",
 * //               DomainName: "STRING_VALUE",
 * //               DomainValidationOptions: [ // AwsCertificateManagerCertificateDomainValidationOptions
 * //                 { // AwsCertificateManagerCertificateDomainValidationOption
 * //                   DomainName: "STRING_VALUE",
 * //                   ResourceRecord: { // AwsCertificateManagerCertificateResourceRecord
 * //                     Name: "STRING_VALUE",
 * //                     Type: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                   ValidationDomain: "STRING_VALUE",
 * //                   ValidationEmails: "<StringList>",
 * //                   ValidationMethod: "STRING_VALUE",
 * //                   ValidationStatus: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ExtendedKeyUsages: [ // AwsCertificateManagerCertificateExtendedKeyUsages
 * //                 { // AwsCertificateManagerCertificateExtendedKeyUsage
 * //                   Name: "STRING_VALUE",
 * //                   OId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               FailureReason: "STRING_VALUE",
 * //               ImportedAt: "STRING_VALUE",
 * //               InUseBy: "<StringList>",
 * //               IssuedAt: "STRING_VALUE",
 * //               Issuer: "STRING_VALUE",
 * //               KeyAlgorithm: "STRING_VALUE",
 * //               KeyUsages: [ // AwsCertificateManagerCertificateKeyUsages
 * //                 { // AwsCertificateManagerCertificateKeyUsage
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               NotAfter: "STRING_VALUE",
 * //               NotBefore: "STRING_VALUE",
 * //               Options: { // AwsCertificateManagerCertificateOptions
 * //                 CertificateTransparencyLoggingPreference: "STRING_VALUE",
 * //               },
 * //               RenewalEligibility: "STRING_VALUE",
 * //               RenewalSummary: { // AwsCertificateManagerCertificateRenewalSummary
 * //                 DomainValidationOptions: [
 * //                   {
 * //                     DomainName: "STRING_VALUE",
 * //                     ResourceRecord: {
 * //                       Name: "STRING_VALUE",
 * //                       Type: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                     },
 * //                     ValidationDomain: "STRING_VALUE",
 * //                     ValidationEmails: "<StringList>",
 * //                     ValidationMethod: "STRING_VALUE",
 * //                     ValidationStatus: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 RenewalStatus: "STRING_VALUE",
 * //                 RenewalStatusReason: "STRING_VALUE",
 * //                 UpdatedAt: "STRING_VALUE",
 * //               },
 * //               Serial: "STRING_VALUE",
 * //               SignatureAlgorithm: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               Subject: "STRING_VALUE",
 * //               SubjectAlternativeNames: "<StringList>",
 * //               Type: "STRING_VALUE",
 * //             },
 * //             AwsRedshiftCluster: { // AwsRedshiftClusterDetails
 * //               AllowVersionUpgrade: true || false,
 * //               AutomatedSnapshotRetentionPeriod: Number("int"),
 * //               AvailabilityZone: "STRING_VALUE",
 * //               ClusterAvailabilityStatus: "STRING_VALUE",
 * //               ClusterCreateTime: "STRING_VALUE",
 * //               ClusterIdentifier: "STRING_VALUE",
 * //               ClusterNodes: [ // AwsRedshiftClusterClusterNodes
 * //                 { // AwsRedshiftClusterClusterNode
 * //                   NodeRole: "STRING_VALUE",
 * //                   PrivateIpAddress: "STRING_VALUE",
 * //                   PublicIpAddress: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ClusterParameterGroups: [ // AwsRedshiftClusterClusterParameterGroups
 * //                 { // AwsRedshiftClusterClusterParameterGroup
 * //                   ClusterParameterStatusList: [ // AwsRedshiftClusterClusterParameterStatusList
 * //                     { // AwsRedshiftClusterClusterParameterStatus
 * //                       ParameterName: "STRING_VALUE",
 * //                       ParameterApplyStatus: "STRING_VALUE",
 * //                       ParameterApplyErrorDescription: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   ParameterApplyStatus: "STRING_VALUE",
 * //                   ParameterGroupName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ClusterPublicKey: "STRING_VALUE",
 * //               ClusterRevisionNumber: "STRING_VALUE",
 * //               ClusterSecurityGroups: [ // AwsRedshiftClusterClusterSecurityGroups
 * //                 { // AwsRedshiftClusterClusterSecurityGroup
 * //                   ClusterSecurityGroupName: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ClusterSnapshotCopyStatus: { // AwsRedshiftClusterClusterSnapshotCopyStatus
 * //                 DestinationRegion: "STRING_VALUE",
 * //                 ManualSnapshotRetentionPeriod: Number("int"),
 * //                 RetentionPeriod: Number("int"),
 * //                 SnapshotCopyGrantName: "STRING_VALUE",
 * //               },
 * //               ClusterStatus: "STRING_VALUE",
 * //               ClusterSubnetGroupName: "STRING_VALUE",
 * //               ClusterVersion: "STRING_VALUE",
 * //               DBName: "STRING_VALUE",
 * //               DeferredMaintenanceWindows: [ // AwsRedshiftClusterDeferredMaintenanceWindows
 * //                 { // AwsRedshiftClusterDeferredMaintenanceWindow
 * //                   DeferMaintenanceEndTime: "STRING_VALUE",
 * //                   DeferMaintenanceIdentifier: "STRING_VALUE",
 * //                   DeferMaintenanceStartTime: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ElasticIpStatus: { // AwsRedshiftClusterElasticIpStatus
 * //                 ElasticIp: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //               },
 * //               ElasticResizeNumberOfNodeOptions: "STRING_VALUE",
 * //               Encrypted: true || false,
 * //               Endpoint: { // AwsRedshiftClusterEndpoint
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //               },
 * //               EnhancedVpcRouting: true || false,
 * //               ExpectedNextSnapshotScheduleTime: "STRING_VALUE",
 * //               ExpectedNextSnapshotScheduleTimeStatus: "STRING_VALUE",
 * //               HsmStatus: { // AwsRedshiftClusterHsmStatus
 * //                 HsmClientCertificateIdentifier: "STRING_VALUE",
 * //                 HsmConfigurationIdentifier: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //               },
 * //               IamRoles: [ // AwsRedshiftClusterIamRoles
 * //                 { // AwsRedshiftClusterIamRole
 * //                   ApplyStatus: "STRING_VALUE",
 * //                   IamRoleArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               KmsKeyId: "STRING_VALUE",
 * //               MaintenanceTrackName: "STRING_VALUE",
 * //               ManualSnapshotRetentionPeriod: Number("int"),
 * //               MasterUsername: "STRING_VALUE",
 * //               NextMaintenanceWindowStartTime: "STRING_VALUE",
 * //               NodeType: "STRING_VALUE",
 * //               NumberOfNodes: Number("int"),
 * //               PendingActions: "<StringList>",
 * //               PendingModifiedValues: { // AwsRedshiftClusterPendingModifiedValues
 * //                 AutomatedSnapshotRetentionPeriod: Number("int"),
 * //                 ClusterIdentifier: "STRING_VALUE",
 * //                 ClusterType: "STRING_VALUE",
 * //                 ClusterVersion: "STRING_VALUE",
 * //                 EncryptionType: "STRING_VALUE",
 * //                 EnhancedVpcRouting: true || false,
 * //                 MaintenanceTrackName: "STRING_VALUE",
 * //                 MasterUserPassword: "STRING_VALUE",
 * //                 NodeType: "STRING_VALUE",
 * //                 NumberOfNodes: Number("int"),
 * //                 PubliclyAccessible: true || false,
 * //               },
 * //               PreferredMaintenanceWindow: "STRING_VALUE",
 * //               PubliclyAccessible: true || false,
 * //               ResizeInfo: { // AwsRedshiftClusterResizeInfo
 * //                 AllowCancelResize: true || false,
 * //                 ResizeType: "STRING_VALUE",
 * //               },
 * //               RestoreStatus: { // AwsRedshiftClusterRestoreStatus
 * //                 CurrentRestoreRateInMegaBytesPerSecond: Number("double"),
 * //                 ElapsedTimeInSeconds: Number("long"),
 * //                 EstimatedTimeToCompletionInSeconds: Number("long"),
 * //                 ProgressInMegaBytes: Number("long"),
 * //                 SnapshotSizeInMegaBytes: Number("long"),
 * //                 Status: "STRING_VALUE",
 * //               },
 * //               SnapshotScheduleIdentifier: "STRING_VALUE",
 * //               SnapshotScheduleState: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcSecurityGroups: [ // AwsRedshiftClusterVpcSecurityGroups
 * //                 { // AwsRedshiftClusterVpcSecurityGroup
 * //                   Status: "STRING_VALUE",
 * //                   VpcSecurityGroupId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               LoggingStatus: { // AwsRedshiftClusterLoggingStatus
 * //                 BucketName: "STRING_VALUE",
 * //                 LastFailureMessage: "STRING_VALUE",
 * //                 LastFailureTime: "STRING_VALUE",
 * //                 LastSuccessfulDeliveryTime: "STRING_VALUE",
 * //                 LoggingEnabled: true || false,
 * //                 S3KeyPrefix: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsElbLoadBalancer: { // AwsElbLoadBalancerDetails
 * //               AvailabilityZones: "<StringList>",
 * //               BackendServerDescriptions: [ // AwsElbLoadBalancerBackendServerDescriptions
 * //                 { // AwsElbLoadBalancerBackendServerDescription
 * //                   InstancePort: Number("int"),
 * //                   PolicyNames: "<StringList>",
 * //                 },
 * //               ],
 * //               CanonicalHostedZoneName: "STRING_VALUE",
 * //               CanonicalHostedZoneNameID: "STRING_VALUE",
 * //               CreatedTime: "STRING_VALUE",
 * //               DnsName: "STRING_VALUE",
 * //               HealthCheck: { // AwsElbLoadBalancerHealthCheck
 * //                 HealthyThreshold: Number("int"),
 * //                 Interval: Number("int"),
 * //                 Target: "STRING_VALUE",
 * //                 Timeout: Number("int"),
 * //                 UnhealthyThreshold: Number("int"),
 * //               },
 * //               Instances: [ // AwsElbLoadBalancerInstances
 * //                 { // AwsElbLoadBalancerInstance
 * //                   InstanceId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ListenerDescriptions: [ // AwsElbLoadBalancerListenerDescriptions
 * //                 { // AwsElbLoadBalancerListenerDescription
 * //                   Listener: { // AwsElbLoadBalancerListener
 * //                     InstancePort: Number("int"),
 * //                     InstanceProtocol: "STRING_VALUE",
 * //                     LoadBalancerPort: Number("int"),
 * //                     Protocol: "STRING_VALUE",
 * //                     SslCertificateId: "STRING_VALUE",
 * //                   },
 * //                   PolicyNames: "<StringList>",
 * //                 },
 * //               ],
 * //               LoadBalancerAttributes: { // AwsElbLoadBalancerAttributes
 * //                 AccessLog: { // AwsElbLoadBalancerAccessLog
 * //                   EmitInterval: Number("int"),
 * //                   Enabled: true || false,
 * //                   S3BucketName: "STRING_VALUE",
 * //                   S3BucketPrefix: "STRING_VALUE",
 * //                 },
 * //                 ConnectionDraining: { // AwsElbLoadBalancerConnectionDraining
 * //                   Enabled: true || false,
 * //                   Timeout: Number("int"),
 * //                 },
 * //                 ConnectionSettings: { // AwsElbLoadBalancerConnectionSettings
 * //                   IdleTimeout: Number("int"),
 * //                 },
 * //                 CrossZoneLoadBalancing: { // AwsElbLoadBalancerCrossZoneLoadBalancing
 * //                   Enabled: true || false,
 * //                 },
 * //                 AdditionalAttributes: [ // AwsElbLoadBalancerAdditionalAttributeList
 * //                   { // AwsElbLoadBalancerAdditionalAttribute
 * //                     Key: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               LoadBalancerName: "STRING_VALUE",
 * //               Policies: { // AwsElbLoadBalancerPolicies
 * //                 AppCookieStickinessPolicies: [ // AwsElbAppCookieStickinessPolicies
 * //                   { // AwsElbAppCookieStickinessPolicy
 * //                     CookieName: "STRING_VALUE",
 * //                     PolicyName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 LbCookieStickinessPolicies: [ // AwsElbLbCookieStickinessPolicies
 * //                   { // AwsElbLbCookieStickinessPolicy
 * //                     CookieExpirationPeriod: Number("long"),
 * //                     PolicyName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 OtherPolicies: "<StringList>",
 * //               },
 * //               Scheme: "STRING_VALUE",
 * //               SecurityGroups: "<StringList>",
 * //               SourceSecurityGroup: { // AwsElbLoadBalancerSourceSecurityGroup
 * //                 GroupName: "STRING_VALUE",
 * //                 OwnerAlias: "STRING_VALUE",
 * //               },
 * //               Subnets: "<StringList>",
 * //               VpcId: "STRING_VALUE",
 * //             },
 * //             AwsIamGroup: { // AwsIamGroupDetails
 * //               AttachedManagedPolicies: [
 * //                 {
 * //                   PolicyName: "STRING_VALUE",
 * //                   PolicyArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CreateDate: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               GroupPolicyList: [ // AwsIamGroupPolicyList
 * //                 { // AwsIamGroupPolicy
 * //                   PolicyName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Path: "STRING_VALUE",
 * //             },
 * //             AwsIamRole: { // AwsIamRoleDetails
 * //               AssumeRolePolicyDocument: "STRING_VALUE",
 * //               AttachedManagedPolicies: [
 * //                 {
 * //                   PolicyName: "STRING_VALUE",
 * //                   PolicyArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CreateDate: "STRING_VALUE",
 * //               InstanceProfileList: [ // AwsIamInstanceProfileList
 * //                 { // AwsIamInstanceProfile
 * //                   Arn: "STRING_VALUE",
 * //                   CreateDate: "STRING_VALUE",
 * //                   InstanceProfileId: "STRING_VALUE",
 * //                   InstanceProfileName: "STRING_VALUE",
 * //                   Path: "STRING_VALUE",
 * //                   Roles: [ // AwsIamInstanceProfileRoles
 * //                     { // AwsIamInstanceProfileRole
 * //                       Arn: "STRING_VALUE",
 * //                       AssumeRolePolicyDocument: "STRING_VALUE",
 * //                       CreateDate: "STRING_VALUE",
 * //                       Path: "STRING_VALUE",
 * //                       RoleId: "STRING_VALUE",
 * //                       RoleName: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               PermissionsBoundary: {
 * //                 PermissionsBoundaryArn: "STRING_VALUE",
 * //                 PermissionsBoundaryType: "STRING_VALUE",
 * //               },
 * //               RoleId: "STRING_VALUE",
 * //               RoleName: "STRING_VALUE",
 * //               RolePolicyList: [ // AwsIamRolePolicyList
 * //                 { // AwsIamRolePolicy
 * //                   PolicyName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               MaxSessionDuration: Number("int"),
 * //               Path: "STRING_VALUE",
 * //             },
 * //             AwsKmsKey: { // AwsKmsKeyDetails
 * //               AWSAccountId: "STRING_VALUE",
 * //               CreationDate: Number("double"),
 * //               KeyId: "STRING_VALUE",
 * //               KeyManager: "STRING_VALUE",
 * //               KeyState: "STRING_VALUE",
 * //               Origin: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               KeyRotationStatus: true || false,
 * //             },
 * //             AwsLambdaFunction: { // AwsLambdaFunctionDetails
 * //               Code: { // AwsLambdaFunctionCode
 * //                 S3Bucket: "STRING_VALUE",
 * //                 S3Key: "STRING_VALUE",
 * //                 S3ObjectVersion: "STRING_VALUE",
 * //                 ZipFile: "STRING_VALUE",
 * //               },
 * //               CodeSha256: "STRING_VALUE",
 * //               DeadLetterConfig: { // AwsLambdaFunctionDeadLetterConfig
 * //                 TargetArn: "STRING_VALUE",
 * //               },
 * //               Environment: { // AwsLambdaFunctionEnvironment
 * //                 Variables: "<FieldMap>",
 * //                 Error: { // AwsLambdaFunctionEnvironmentError
 * //                   ErrorCode: "STRING_VALUE",
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //               },
 * //               FunctionName: "STRING_VALUE",
 * //               Handler: "STRING_VALUE",
 * //               KmsKeyArn: "STRING_VALUE",
 * //               LastModified: "STRING_VALUE",
 * //               Layers: [ // AwsLambdaFunctionLayerList
 * //                 { // AwsLambdaFunctionLayer
 * //                   Arn: "STRING_VALUE",
 * //                   CodeSize: Number("int"),
 * //                 },
 * //               ],
 * //               MasterArn: "STRING_VALUE",
 * //               MemorySize: Number("int"),
 * //               RevisionId: "STRING_VALUE",
 * //               Role: "STRING_VALUE",
 * //               Runtime: "STRING_VALUE",
 * //               Timeout: Number("int"),
 * //               TracingConfig: { // AwsLambdaFunctionTracingConfig
 * //                 Mode: "STRING_VALUE",
 * //               },
 * //               VpcConfig: { // AwsLambdaFunctionVpcConfig
 * //                 SecurityGroupIds: "<NonEmptyStringList>",
 * //                 SubnetIds: "<NonEmptyStringList>",
 * //                 VpcId: "STRING_VALUE",
 * //               },
 * //               Version: "STRING_VALUE",
 * //               Architectures: "<NonEmptyStringList>",
 * //               PackageType: "STRING_VALUE",
 * //             },
 * //             AwsLambdaLayerVersion: { // AwsLambdaLayerVersionDetails
 * //               Version: Number("long"),
 * //               CompatibleRuntimes: "<NonEmptyStringList>",
 * //               CreatedDate: "STRING_VALUE",
 * //             },
 * //             AwsRdsDbInstance: { // AwsRdsDbInstanceDetails
 * //               AssociatedRoles: [ // AwsRdsDbInstanceAssociatedRoles
 * //                 { // AwsRdsDbInstanceAssociatedRole
 * //                   RoleArn: "STRING_VALUE",
 * //                   FeatureName: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CACertificateIdentifier: "STRING_VALUE",
 * //               DBClusterIdentifier: "STRING_VALUE",
 * //               DBInstanceIdentifier: "STRING_VALUE",
 * //               DBInstanceClass: "STRING_VALUE",
 * //               DbInstancePort: Number("int"),
 * //               DbiResourceId: "STRING_VALUE",
 * //               DBName: "STRING_VALUE",
 * //               DeletionProtection: true || false,
 * //               Endpoint: { // AwsRdsDbInstanceEndpoint
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //                 HostedZoneId: "STRING_VALUE",
 * //               },
 * //               Engine: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               IAMDatabaseAuthenticationEnabled: true || false,
 * //               InstanceCreateTime: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               PubliclyAccessible: true || false,
 * //               StorageEncrypted: true || false,
 * //               TdeCredentialArn: "STRING_VALUE",
 * //               VpcSecurityGroups: [ // AwsRdsDbInstanceVpcSecurityGroups
 * //                 { // AwsRdsDbInstanceVpcSecurityGroup
 * //                   VpcSecurityGroupId: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               MultiAz: true || false,
 * //               EnhancedMonitoringResourceArn: "STRING_VALUE",
 * //               DbInstanceStatus: "STRING_VALUE",
 * //               MasterUsername: "STRING_VALUE",
 * //               AllocatedStorage: Number("int"),
 * //               PreferredBackupWindow: "STRING_VALUE",
 * //               BackupRetentionPeriod: Number("int"),
 * //               DbSecurityGroups: "<StringList>",
 * //               DbParameterGroups: [ // AwsRdsDbParameterGroups
 * //                 { // AwsRdsDbParameterGroup
 * //                   DbParameterGroupName: "STRING_VALUE",
 * //                   ParameterApplyStatus: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               AvailabilityZone: "STRING_VALUE",
 * //               DbSubnetGroup: { // AwsRdsDbSubnetGroup
 * //                 DbSubnetGroupName: "STRING_VALUE",
 * //                 DbSubnetGroupDescription: "STRING_VALUE",
 * //                 VpcId: "STRING_VALUE",
 * //                 SubnetGroupStatus: "STRING_VALUE",
 * //                 Subnets: [ // AwsRdsDbSubnetGroupSubnets
 * //                   { // AwsRdsDbSubnetGroupSubnet
 * //                     SubnetIdentifier: "STRING_VALUE",
 * //                     SubnetAvailabilityZone: { // AwsRdsDbSubnetGroupSubnetAvailabilityZone
 * //                       Name: "STRING_VALUE",
 * //                     },
 * //                     SubnetStatus: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 DbSubnetGroupArn: "STRING_VALUE",
 * //               },
 * //               PreferredMaintenanceWindow: "STRING_VALUE",
 * //               PendingModifiedValues: { // AwsRdsDbPendingModifiedValues
 * //                 DbInstanceClass: "STRING_VALUE",
 * //                 AllocatedStorage: Number("int"),
 * //                 MasterUserPassword: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //                 BackupRetentionPeriod: Number("int"),
 * //                 MultiAZ: true || false,
 * //                 EngineVersion: "STRING_VALUE",
 * //                 LicenseModel: "STRING_VALUE",
 * //                 Iops: Number("int"),
 * //                 DbInstanceIdentifier: "STRING_VALUE",
 * //                 StorageType: "STRING_VALUE",
 * //                 CaCertificateIdentifier: "STRING_VALUE",
 * //                 DbSubnetGroupName: "STRING_VALUE",
 * //                 PendingCloudWatchLogsExports: { // AwsRdsPendingCloudWatchLogsExports
 * //                   LogTypesToEnable: "<StringList>",
 * //                   LogTypesToDisable: "<StringList>",
 * //                 },
 * //                 ProcessorFeatures: [ // AwsRdsDbProcessorFeatures
 * //                   { // AwsRdsDbProcessorFeature
 * //                     Name: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               LatestRestorableTime: "STRING_VALUE",
 * //               AutoMinorVersionUpgrade: true || false,
 * //               ReadReplicaSourceDBInstanceIdentifier: "STRING_VALUE",
 * //               ReadReplicaDBInstanceIdentifiers: "<StringList>",
 * //               ReadReplicaDBClusterIdentifiers: "<StringList>",
 * //               LicenseModel: "STRING_VALUE",
 * //               Iops: Number("int"),
 * //               OptionGroupMemberships: [ // AwsRdsDbOptionGroupMemberships
 * //                 { // AwsRdsDbOptionGroupMembership
 * //                   OptionGroupName: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CharacterSetName: "STRING_VALUE",
 * //               SecondaryAvailabilityZone: "STRING_VALUE",
 * //               StatusInfos: [ // AwsRdsDbStatusInfos
 * //                 { // AwsRdsDbStatusInfo
 * //                   StatusType: "STRING_VALUE",
 * //                   Normal: true || false,
 * //                   Status: "STRING_VALUE",
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               StorageType: "STRING_VALUE",
 * //               DomainMemberships: [ // AwsRdsDbDomainMemberships
 * //                 { // AwsRdsDbDomainMembership
 * //                   Domain: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                   Fqdn: "STRING_VALUE",
 * //                   IamRoleName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CopyTagsToSnapshot: true || false,
 * //               MonitoringInterval: Number("int"),
 * //               MonitoringRoleArn: "STRING_VALUE",
 * //               PromotionTier: Number("int"),
 * //               Timezone: "STRING_VALUE",
 * //               PerformanceInsightsEnabled: true || false,
 * //               PerformanceInsightsKmsKeyId: "STRING_VALUE",
 * //               PerformanceInsightsRetentionPeriod: Number("int"),
 * //               EnabledCloudWatchLogsExports: "<StringList>",
 * //               ProcessorFeatures: [
 * //                 {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ListenerEndpoint: {
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //                 HostedZoneId: "STRING_VALUE",
 * //               },
 * //               MaxAllocatedStorage: Number("int"),
 * //             },
 * //             AwsSnsTopic: { // AwsSnsTopicDetails
 * //               KmsMasterKeyId: "STRING_VALUE",
 * //               Subscription: [ // AwsSnsTopicSubscriptionList
 * //                 { // AwsSnsTopicSubscription
 * //                   Endpoint: "STRING_VALUE",
 * //                   Protocol: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               TopicName: "STRING_VALUE",
 * //               Owner: "STRING_VALUE",
 * //               SqsSuccessFeedbackRoleArn: "STRING_VALUE",
 * //               SqsFailureFeedbackRoleArn: "STRING_VALUE",
 * //               ApplicationSuccessFeedbackRoleArn: "STRING_VALUE",
 * //               FirehoseSuccessFeedbackRoleArn: "STRING_VALUE",
 * //               FirehoseFailureFeedbackRoleArn: "STRING_VALUE",
 * //               HttpSuccessFeedbackRoleArn: "STRING_VALUE",
 * //               HttpFailureFeedbackRoleArn: "STRING_VALUE",
 * //             },
 * //             AwsSqsQueue: { // AwsSqsQueueDetails
 * //               KmsDataKeyReusePeriodSeconds: Number("int"),
 * //               KmsMasterKeyId: "STRING_VALUE",
 * //               QueueName: "STRING_VALUE",
 * //               DeadLetterTargetArn: "STRING_VALUE",
 * //             },
 * //             AwsWafWebAcl: { // AwsWafWebAclDetails
 * //               Name: "STRING_VALUE",
 * //               DefaultAction: "STRING_VALUE",
 * //               Rules: [ // AwsWafWebAclRuleList
 * //                 { // AwsWafWebAclRule
 * //                   Action: { // WafAction
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   ExcludedRules: [ // WafExcludedRuleList
 * //                     { // WafExcludedRule
 * //                       RuleId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   OverrideAction: { // WafOverrideAction
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   Priority: Number("int"),
 * //                   RuleId: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               WebAclId: "STRING_VALUE",
 * //             },
 * //             AwsRdsDbSnapshot: { // AwsRdsDbSnapshotDetails
 * //               DbSnapshotIdentifier: "STRING_VALUE",
 * //               DbInstanceIdentifier: "STRING_VALUE",
 * //               SnapshotCreateTime: "STRING_VALUE",
 * //               Engine: "STRING_VALUE",
 * //               AllocatedStorage: Number("int"),
 * //               Status: "STRING_VALUE",
 * //               Port: Number("int"),
 * //               AvailabilityZone: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               InstanceCreateTime: "STRING_VALUE",
 * //               MasterUsername: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               LicenseModel: "STRING_VALUE",
 * //               SnapshotType: "STRING_VALUE",
 * //               Iops: Number("int"),
 * //               OptionGroupName: "STRING_VALUE",
 * //               PercentProgress: Number("int"),
 * //               SourceRegion: "STRING_VALUE",
 * //               SourceDbSnapshotIdentifier: "STRING_VALUE",
 * //               StorageType: "STRING_VALUE",
 * //               TdeCredentialArn: "STRING_VALUE",
 * //               Encrypted: true || false,
 * //               KmsKeyId: "STRING_VALUE",
 * //               Timezone: "STRING_VALUE",
 * //               IamDatabaseAuthenticationEnabled: true || false,
 * //               ProcessorFeatures: [
 * //                 {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               DbiResourceId: "STRING_VALUE",
 * //             },
 * //             AwsRdsDbClusterSnapshot: { // AwsRdsDbClusterSnapshotDetails
 * //               AvailabilityZones: "<StringList>",
 * //               SnapshotCreateTime: "STRING_VALUE",
 * //               Engine: "STRING_VALUE",
 * //               AllocatedStorage: Number("int"),
 * //               Status: "STRING_VALUE",
 * //               Port: Number("int"),
 * //               VpcId: "STRING_VALUE",
 * //               ClusterCreateTime: "STRING_VALUE",
 * //               MasterUsername: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               LicenseModel: "STRING_VALUE",
 * //               SnapshotType: "STRING_VALUE",
 * //               PercentProgress: Number("int"),
 * //               StorageEncrypted: true || false,
 * //               KmsKeyId: "STRING_VALUE",
 * //               DbClusterIdentifier: "STRING_VALUE",
 * //               DbClusterSnapshotIdentifier: "STRING_VALUE",
 * //               IamDatabaseAuthenticationEnabled: true || false,
 * //               DbClusterSnapshotAttributes: [ // AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes
 * //                 { // AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute
 * //                   AttributeName: "STRING_VALUE",
 * //                   AttributeValues: "<NonEmptyStringList>",
 * //                 },
 * //               ],
 * //             },
 * //             AwsRdsDbCluster: { // AwsRdsDbClusterDetails
 * //               AllocatedStorage: Number("int"),
 * //               AvailabilityZones: "<StringList>",
 * //               BackupRetentionPeriod: Number("int"),
 * //               DatabaseName: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               Endpoint: "STRING_VALUE",
 * //               ReaderEndpoint: "STRING_VALUE",
 * //               CustomEndpoints: "<StringList>",
 * //               MultiAz: true || false,
 * //               Engine: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               Port: Number("int"),
 * //               MasterUsername: "STRING_VALUE",
 * //               PreferredBackupWindow: "STRING_VALUE",
 * //               PreferredMaintenanceWindow: "STRING_VALUE",
 * //               ReadReplicaIdentifiers: "<StringList>",
 * //               VpcSecurityGroups: [
 * //                 {
 * //                   VpcSecurityGroupId: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               HostedZoneId: "STRING_VALUE",
 * //               StorageEncrypted: true || false,
 * //               KmsKeyId: "STRING_VALUE",
 * //               DbClusterResourceId: "STRING_VALUE",
 * //               AssociatedRoles: [ // AwsRdsDbClusterAssociatedRoles
 * //                 { // AwsRdsDbClusterAssociatedRole
 * //                   RoleArn: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ClusterCreateTime: "STRING_VALUE",
 * //               EnabledCloudWatchLogsExports: "<StringList>",
 * //               EngineMode: "STRING_VALUE",
 * //               DeletionProtection: true || false,
 * //               HttpEndpointEnabled: true || false,
 * //               ActivityStreamStatus: "STRING_VALUE",
 * //               CopyTagsToSnapshot: true || false,
 * //               CrossAccountClone: true || false,
 * //               DomainMemberships: [
 * //                 {
 * //                   Domain: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                   Fqdn: "STRING_VALUE",
 * //                   IamRoleName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               DbClusterParameterGroup: "STRING_VALUE",
 * //               DbSubnetGroup: "STRING_VALUE",
 * //               DbClusterOptionGroupMemberships: [ // AwsRdsDbClusterOptionGroupMemberships
 * //                 { // AwsRdsDbClusterOptionGroupMembership
 * //                   DbClusterOptionGroupName: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               DbClusterIdentifier: "STRING_VALUE",
 * //               DbClusterMembers: [ // AwsRdsDbClusterMembers
 * //                 { // AwsRdsDbClusterMember
 * //                   IsClusterWriter: true || false,
 * //                   PromotionTier: Number("int"),
 * //                   DbInstanceIdentifier: "STRING_VALUE",
 * //                   DbClusterParameterGroupStatus: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               IamDatabaseAuthenticationEnabled: true || false,
 * //               AutoMinorVersionUpgrade: true || false,
 * //             },
 * //             AwsEcsCluster: { // AwsEcsClusterDetails
 * //               ClusterArn: "STRING_VALUE",
 * //               ActiveServicesCount: Number("int"),
 * //               CapacityProviders: "<NonEmptyStringList>",
 * //               ClusterSettings: [ // AwsEcsClusterClusterSettingsList
 * //                 { // AwsEcsClusterClusterSettingsDetails
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Configuration: { // AwsEcsClusterConfigurationDetails
 * //                 ExecuteCommandConfiguration: { // AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
 * //                   KmsKeyId: "STRING_VALUE",
 * //                   LogConfiguration: { // AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
 * //                     CloudWatchEncryptionEnabled: true || false,
 * //                     CloudWatchLogGroupName: "STRING_VALUE",
 * //                     S3BucketName: "STRING_VALUE",
 * //                     S3EncryptionEnabled: true || false,
 * //                     S3KeyPrefix: "STRING_VALUE",
 * //                   },
 * //                   Logging: "STRING_VALUE",
 * //                 },
 * //               },
 * //               DefaultCapacityProviderStrategy: [ // AwsEcsClusterDefaultCapacityProviderStrategyList
 * //                 { // AwsEcsClusterDefaultCapacityProviderStrategyDetails
 * //                   Base: Number("int"),
 * //                   CapacityProvider: "STRING_VALUE",
 * //                   Weight: Number("int"),
 * //                 },
 * //               ],
 * //               ClusterName: "STRING_VALUE",
 * //               RegisteredContainerInstancesCount: Number("int"),
 * //               RunningTasksCount: Number("int"),
 * //               Status: "STRING_VALUE",
 * //             },
 * //             AwsEcsContainer: { // AwsEcsContainerDetails
 * //               Name: "STRING_VALUE",
 * //               Image: "STRING_VALUE",
 * //               MountPoints: [ // AwsMountPointList
 * //                 { // AwsMountPoint
 * //                   SourceVolume: "STRING_VALUE",
 * //                   ContainerPath: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Privileged: true || false,
 * //             },
 * //             AwsEcsTaskDefinition: { // AwsEcsTaskDefinitionDetails
 * //               ContainerDefinitions: [ // AwsEcsTaskDefinitionContainerDefinitionsList
 * //                 { // AwsEcsTaskDefinitionContainerDefinitionsDetails
 * //                   Command: "<NonEmptyStringList>",
 * //                   Cpu: Number("int"),
 * //                   DependsOn: [ // AwsEcsTaskDefinitionContainerDefinitionsDependsOnList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
 * //                       Condition: "STRING_VALUE",
 * //                       ContainerName: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   DisableNetworking: true || false,
 * //                   DnsSearchDomains: "<NonEmptyStringList>",
 * //                   DnsServers: "<NonEmptyStringList>",
 * //                   DockerLabels: "<FieldMap>",
 * //                   DockerSecurityOptions: "<NonEmptyStringList>",
 * //                   EntryPoint: "<NonEmptyStringList>",
 * //                   Environment: [ // AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
 * //                       Name: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   EnvironmentFiles: [ // AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
 * //                       Type: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Essential: true || false,
 * //                   ExtraHosts: [ // AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
 * //                       Hostname: "STRING_VALUE",
 * //                       IpAddress: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   FirelensConfiguration: { // AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
 * //                     Options: "<FieldMap>",
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   HealthCheck: { // AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
 * //                     Command: "<NonEmptyStringList>",
 * //                     Interval: Number("int"),
 * //                     Retries: Number("int"),
 * //                     StartPeriod: Number("int"),
 * //                     Timeout: Number("int"),
 * //                   },
 * //                   Hostname: "STRING_VALUE",
 * //                   Image: "STRING_VALUE",
 * //                   Interactive: true || false,
 * //                   Links: "<NonEmptyStringList>",
 * //                   LinuxParameters: { // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
 * //                     Capabilities: { // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
 * //                       Add: "<NonEmptyStringList>",
 * //                       Drop: "<NonEmptyStringList>",
 * //                     },
 * //                     Devices: [ // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList
 * //                       { // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
 * //                         ContainerPath: "STRING_VALUE",
 * //                         HostPath: "STRING_VALUE",
 * //                         Permissions: "<NonEmptyStringList>",
 * //                       },
 * //                     ],
 * //                     InitProcessEnabled: true || false,
 * //                     MaxSwap: Number("int"),
 * //                     SharedMemorySize: Number("int"),
 * //                     Swappiness: Number("int"),
 * //                     Tmpfs: [ // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList
 * //                       { // AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
 * //                         ContainerPath: "STRING_VALUE",
 * //                         MountOptions: "<NonEmptyStringList>",
 * //                         Size: Number("int"),
 * //                       },
 * //                     ],
 * //                   },
 * //                   LogConfiguration: { // AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
 * //                     LogDriver: "STRING_VALUE",
 * //                     Options: "<FieldMap>",
 * //                     SecretOptions: [ // AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList
 * //                       { // AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
 * //                         Name: "STRING_VALUE",
 * //                         ValueFrom: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                   Memory: Number("int"),
 * //                   MemoryReservation: Number("int"),
 * //                   MountPoints: [ // AwsEcsTaskDefinitionContainerDefinitionsMountPointsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
 * //                       ContainerPath: "STRING_VALUE",
 * //                       ReadOnly: true || false,
 * //                       SourceVolume: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Name: "STRING_VALUE",
 * //                   PortMappings: [ // AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
 * //                       ContainerPort: Number("int"),
 * //                       HostPort: Number("int"),
 * //                       Protocol: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Privileged: true || false,
 * //                   PseudoTerminal: true || false,
 * //                   ReadonlyRootFilesystem: true || false,
 * //                   RepositoryCredentials: { // AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
 * //                     CredentialsParameter: "STRING_VALUE",
 * //                   },
 * //                   ResourceRequirements: [ // AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
 * //                       Type: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Secrets: [ // AwsEcsTaskDefinitionContainerDefinitionsSecretsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
 * //                       Name: "STRING_VALUE",
 * //                       ValueFrom: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   StartTimeout: Number("int"),
 * //                   StopTimeout: Number("int"),
 * //                   SystemControls: [ // AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
 * //                       Namespace: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Ulimits: [ // AwsEcsTaskDefinitionContainerDefinitionsUlimitsList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
 * //                       HardLimit: Number("int"),
 * //                       Name: "STRING_VALUE",
 * //                       SoftLimit: Number("int"),
 * //                     },
 * //                   ],
 * //                   User: "STRING_VALUE",
 * //                   VolumesFrom: [ // AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList
 * //                     { // AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
 * //                       ReadOnly: true || false,
 * //                       SourceContainer: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   WorkingDirectory: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Cpu: "STRING_VALUE",
 * //               ExecutionRoleArn: "STRING_VALUE",
 * //               Family: "STRING_VALUE",
 * //               InferenceAccelerators: [ // AwsEcsTaskDefinitionInferenceAcceleratorsList
 * //                 { // AwsEcsTaskDefinitionInferenceAcceleratorsDetails
 * //                   DeviceName: "STRING_VALUE",
 * //                   DeviceType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               IpcMode: "STRING_VALUE",
 * //               Memory: "STRING_VALUE",
 * //               NetworkMode: "STRING_VALUE",
 * //               PidMode: "STRING_VALUE",
 * //               PlacementConstraints: [ // AwsEcsTaskDefinitionPlacementConstraintsList
 * //                 { // AwsEcsTaskDefinitionPlacementConstraintsDetails
 * //                   Expression: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ProxyConfiguration: { // AwsEcsTaskDefinitionProxyConfigurationDetails
 * //                 ContainerName: "STRING_VALUE",
 * //                 ProxyConfigurationProperties: [ // AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList
 * //                   { // AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
 * //                     Name: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Type: "STRING_VALUE",
 * //               },
 * //               RequiresCompatibilities: "<NonEmptyStringList>",
 * //               TaskRoleArn: "STRING_VALUE",
 * //               Volumes: [ // AwsEcsTaskDefinitionVolumesList
 * //                 { // AwsEcsTaskDefinitionVolumesDetails
 * //                   DockerVolumeConfiguration: { // AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
 * //                     Autoprovision: true || false,
 * //                     Driver: "STRING_VALUE",
 * //                     DriverOpts: "<FieldMap>",
 * //                     Labels: "<FieldMap>",
 * //                     Scope: "STRING_VALUE",
 * //                   },
 * //                   EfsVolumeConfiguration: { // AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
 * //                     AuthorizationConfig: { // AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
 * //                       AccessPointId: "STRING_VALUE",
 * //                       Iam: "STRING_VALUE",
 * //                     },
 * //                     FilesystemId: "STRING_VALUE",
 * //                     RootDirectory: "STRING_VALUE",
 * //                     TransitEncryption: "STRING_VALUE",
 * //                     TransitEncryptionPort: Number("int"),
 * //                   },
 * //                   Host: { // AwsEcsTaskDefinitionVolumesHostDetails
 * //                     SourcePath: "STRING_VALUE",
 * //                   },
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Status: "STRING_VALUE",
 * //             },
 * //             Container: { // ContainerDetails
 * //               ContainerRuntime: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               ImageId: "STRING_VALUE",
 * //               ImageName: "STRING_VALUE",
 * //               LaunchedAt: "STRING_VALUE",
 * //               VolumeMounts: [ // VolumeMountList
 * //                 { // VolumeMount
 * //                   Name: "STRING_VALUE",
 * //                   MountPath: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Privileged: true || false,
 * //             },
 * //             Other: "<FieldMap>",
 * //             AwsRdsEventSubscription: { // AwsRdsEventSubscriptionDetails
 * //               CustSubscriptionId: "STRING_VALUE",
 * //               CustomerAwsId: "STRING_VALUE",
 * //               Enabled: true || false,
 * //               EventCategoriesList: "<NonEmptyStringList>",
 * //               EventSubscriptionArn: "STRING_VALUE",
 * //               SnsTopicArn: "STRING_VALUE",
 * //               SourceIdsList: "<NonEmptyStringList>",
 * //               SourceType: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               SubscriptionCreationTime: "STRING_VALUE",
 * //             },
 * //             AwsEcsService: { // AwsEcsServiceDetails
 * //               CapacityProviderStrategy: [ // AwsEcsServiceCapacityProviderStrategyList
 * //                 { // AwsEcsServiceCapacityProviderStrategyDetails
 * //                   Base: Number("int"),
 * //                   CapacityProvider: "STRING_VALUE",
 * //                   Weight: Number("int"),
 * //                 },
 * //               ],
 * //               Cluster: "STRING_VALUE",
 * //               DeploymentConfiguration: { // AwsEcsServiceDeploymentConfigurationDetails
 * //                 DeploymentCircuitBreaker: { // AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
 * //                   Enable: true || false,
 * //                   Rollback: true || false,
 * //                 },
 * //                 MaximumPercent: Number("int"),
 * //                 MinimumHealthyPercent: Number("int"),
 * //               },
 * //               DeploymentController: { // AwsEcsServiceDeploymentControllerDetails
 * //                 Type: "STRING_VALUE",
 * //               },
 * //               DesiredCount: Number("int"),
 * //               EnableEcsManagedTags: true || false,
 * //               EnableExecuteCommand: true || false,
 * //               HealthCheckGracePeriodSeconds: Number("int"),
 * //               LaunchType: "STRING_VALUE",
 * //               LoadBalancers: [ // AwsEcsServiceLoadBalancersList
 * //                 { // AwsEcsServiceLoadBalancersDetails
 * //                   ContainerName: "STRING_VALUE",
 * //                   ContainerPort: Number("int"),
 * //                   LoadBalancerName: "STRING_VALUE",
 * //                   TargetGroupArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Name: "STRING_VALUE",
 * //               NetworkConfiguration: { // AwsEcsServiceNetworkConfigurationDetails
 * //                 AwsVpcConfiguration: { // AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
 * //                   AssignPublicIp: "STRING_VALUE",
 * //                   SecurityGroups: "<NonEmptyStringList>",
 * //                   Subnets: "<NonEmptyStringList>",
 * //                 },
 * //               },
 * //               PlacementConstraints: [ // AwsEcsServicePlacementConstraintsList
 * //                 { // AwsEcsServicePlacementConstraintsDetails
 * //                   Expression: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PlacementStrategies: [ // AwsEcsServicePlacementStrategiesList
 * //                 { // AwsEcsServicePlacementStrategiesDetails
 * //                   Field: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PlatformVersion: "STRING_VALUE",
 * //               PropagateTags: "STRING_VALUE",
 * //               Role: "STRING_VALUE",
 * //               SchedulingStrategy: "STRING_VALUE",
 * //               ServiceArn: "STRING_VALUE",
 * //               ServiceName: "STRING_VALUE",
 * //               ServiceRegistries: [ // AwsEcsServiceServiceRegistriesList
 * //                 { // AwsEcsServiceServiceRegistriesDetails
 * //                   ContainerName: "STRING_VALUE",
 * //                   ContainerPort: Number("int"),
 * //                   Port: Number("int"),
 * //                   RegistryArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               TaskDefinition: "STRING_VALUE",
 * //             },
 * //             AwsAutoScalingLaunchConfiguration: { // AwsAutoScalingLaunchConfigurationDetails
 * //               AssociatePublicIpAddress: true || false,
 * //               BlockDeviceMappings: [ // AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList
 * //                 { // AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
 * //                   DeviceName: "STRING_VALUE",
 * //                   Ebs: { // AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails
 * //                     DeleteOnTermination: true || false,
 * //                     Encrypted: true || false,
 * //                     Iops: Number("int"),
 * //                     SnapshotId: "STRING_VALUE",
 * //                     VolumeSize: Number("int"),
 * //                     VolumeType: "STRING_VALUE",
 * //                   },
 * //                   NoDevice: true || false,
 * //                   VirtualName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ClassicLinkVpcId: "STRING_VALUE",
 * //               ClassicLinkVpcSecurityGroups: "<NonEmptyStringList>",
 * //               CreatedTime: "STRING_VALUE",
 * //               EbsOptimized: true || false,
 * //               IamInstanceProfile: "STRING_VALUE",
 * //               ImageId: "STRING_VALUE",
 * //               InstanceMonitoring: { // AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails
 * //                 Enabled: true || false,
 * //               },
 * //               InstanceType: "STRING_VALUE",
 * //               KernelId: "STRING_VALUE",
 * //               KeyName: "STRING_VALUE",
 * //               LaunchConfigurationName: "STRING_VALUE",
 * //               PlacementTenancy: "STRING_VALUE",
 * //               RamdiskId: "STRING_VALUE",
 * //               SecurityGroups: "<NonEmptyStringList>",
 * //               SpotPrice: "STRING_VALUE",
 * //               UserData: "STRING_VALUE",
 * //               MetadataOptions: { // AwsAutoScalingLaunchConfigurationMetadataOptions
 * //                 HttpEndpoint: "STRING_VALUE",
 * //                 HttpPutResponseHopLimit: Number("int"),
 * //                 HttpTokens: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsEc2VpnConnection: { // AwsEc2VpnConnectionDetails
 * //               VpnConnectionId: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               CustomerGatewayId: "STRING_VALUE",
 * //               CustomerGatewayConfiguration: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //               VpnGatewayId: "STRING_VALUE",
 * //               Category: "STRING_VALUE",
 * //               VgwTelemetry: [ // AwsEc2VpnConnectionVgwTelemetryList
 * //                 { // AwsEc2VpnConnectionVgwTelemetryDetails
 * //                   AcceptedRouteCount: Number("int"),
 * //                   CertificateArn: "STRING_VALUE",
 * //                   LastStatusChange: "STRING_VALUE",
 * //                   OutsideIpAddress: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                   StatusMessage: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Options: { // AwsEc2VpnConnectionOptionsDetails
 * //                 StaticRoutesOnly: true || false,
 * //                 TunnelOptions: [ // AwsEc2VpnConnectionOptionsTunnelOptionsList
 * //                   { // AwsEc2VpnConnectionOptionsTunnelOptionsDetails
 * //                     DpdTimeoutSeconds: Number("int"),
 * //                     IkeVersions: "<NonEmptyStringList>",
 * //                     OutsideIpAddress: "STRING_VALUE",
 * //                     Phase1DhGroupNumbers: [ // IntegerList
 * //                       Number("int"),
 * //                     ],
 * //                     Phase1EncryptionAlgorithms: "<NonEmptyStringList>",
 * //                     Phase1IntegrityAlgorithms: "<NonEmptyStringList>",
 * //                     Phase1LifetimeSeconds: Number("int"),
 * //                     Phase2DhGroupNumbers: [
 * //                       Number("int"),
 * //                     ],
 * //                     Phase2EncryptionAlgorithms: "<NonEmptyStringList>",
 * //                     Phase2IntegrityAlgorithms: "<NonEmptyStringList>",
 * //                     Phase2LifetimeSeconds: Number("int"),
 * //                     PreSharedKey: "STRING_VALUE",
 * //                     RekeyFuzzPercentage: Number("int"),
 * //                     RekeyMarginTimeSeconds: Number("int"),
 * //                     ReplayWindowSize: Number("int"),
 * //                     TunnelInsideCidr: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               Routes: [ // AwsEc2VpnConnectionRoutesList
 * //                 { // AwsEc2VpnConnectionRoutesDetails
 * //                   DestinationCidrBlock: "STRING_VALUE",
 * //                   State: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               TransitGatewayId: "STRING_VALUE",
 * //             },
 * //             AwsEcrContainerImage: { // AwsEcrContainerImageDetails
 * //               RegistryId: "STRING_VALUE",
 * //               RepositoryName: "STRING_VALUE",
 * //               Architecture: "STRING_VALUE",
 * //               ImageDigest: "STRING_VALUE",
 * //               ImageTags: "<NonEmptyStringList>",
 * //               ImagePublishedAt: "STRING_VALUE",
 * //             },
 * //             AwsOpenSearchServiceDomain: { // AwsOpenSearchServiceDomainDetails
 * //               Arn: "STRING_VALUE",
 * //               AccessPolicies: "STRING_VALUE",
 * //               DomainName: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               DomainEndpoint: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               EncryptionAtRestOptions: { // AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails
 * //                 Enabled: true || false,
 * //                 KmsKeyId: "STRING_VALUE",
 * //               },
 * //               NodeToNodeEncryptionOptions: { // AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails
 * //                 Enabled: true || false,
 * //               },
 * //               ServiceSoftwareOptions: { // AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails
 * //                 AutomatedUpdateDate: "STRING_VALUE",
 * //                 Cancellable: true || false,
 * //                 CurrentVersion: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //                 NewVersion: "STRING_VALUE",
 * //                 UpdateAvailable: true || false,
 * //                 UpdateStatus: "STRING_VALUE",
 * //                 OptionalDeployment: true || false,
 * //               },
 * //               ClusterConfig: { // AwsOpenSearchServiceDomainClusterConfigDetails
 * //                 InstanceCount: Number("int"),
 * //                 WarmEnabled: true || false,
 * //                 WarmCount: Number("int"),
 * //                 DedicatedMasterEnabled: true || false,
 * //                 ZoneAwarenessConfig: { // AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails
 * //                   AvailabilityZoneCount: Number("int"),
 * //                 },
 * //                 DedicatedMasterCount: Number("int"),
 * //                 InstanceType: "STRING_VALUE",
 * //                 WarmType: "STRING_VALUE",
 * //                 ZoneAwarenessEnabled: true || false,
 * //                 DedicatedMasterType: "STRING_VALUE",
 * //               },
 * //               DomainEndpointOptions: { // AwsOpenSearchServiceDomainDomainEndpointOptionsDetails
 * //                 CustomEndpointCertificateArn: "STRING_VALUE",
 * //                 CustomEndpointEnabled: true || false,
 * //                 EnforceHTTPS: true || false,
 * //                 CustomEndpoint: "STRING_VALUE",
 * //                 TLSSecurityPolicy: "STRING_VALUE",
 * //               },
 * //               VpcOptions: { // AwsOpenSearchServiceDomainVpcOptionsDetails
 * //                 SecurityGroupIds: "<NonEmptyStringList>",
 * //                 SubnetIds: "<NonEmptyStringList>",
 * //               },
 * //               LogPublishingOptions: { // AwsOpenSearchServiceDomainLogPublishingOptionsDetails
 * //                 IndexSlowLogs: { // AwsOpenSearchServiceDomainLogPublishingOption
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //                 SearchSlowLogs: {
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //                 AuditLogs: {
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               DomainEndpoints: "<FieldMap>",
 * //               AdvancedSecurityOptions: { // AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails
 * //                 Enabled: true || false,
 * //                 InternalUserDatabaseEnabled: true || false,
 * //                 MasterUserOptions: { // AwsOpenSearchServiceDomainMasterUserOptionsDetails
 * //                   MasterUserArn: "STRING_VALUE",
 * //                   MasterUserName: "STRING_VALUE",
 * //                   MasterUserPassword: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             AwsEc2VpcEndpointService: { // AwsEc2VpcEndpointServiceDetails
 * //               AcceptanceRequired: true || false,
 * //               AvailabilityZones: "<NonEmptyStringList>",
 * //               BaseEndpointDnsNames: "<NonEmptyStringList>",
 * //               ManagesVpcEndpoints: true || false,
 * //               GatewayLoadBalancerArns: "<NonEmptyStringList>",
 * //               NetworkLoadBalancerArns: "<NonEmptyStringList>",
 * //               PrivateDnsName: "STRING_VALUE",
 * //               ServiceId: "STRING_VALUE",
 * //               ServiceName: "STRING_VALUE",
 * //               ServiceState: "STRING_VALUE",
 * //               ServiceType: [ // AwsEc2VpcEndpointServiceServiceTypeList
 * //                 { // AwsEc2VpcEndpointServiceServiceTypeDetails
 * //                   ServiceType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsXrayEncryptionConfig: { // AwsXrayEncryptionConfigDetails
 * //               KeyId: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //             AwsWafRateBasedRule: { // AwsWafRateBasedRuleDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               RateKey: "STRING_VALUE",
 * //               RateLimit: Number("long"),
 * //               RuleId: "STRING_VALUE",
 * //               MatchPredicates: [ // AwsWafRateBasedRuleMatchPredicateList
 * //                 { // AwsWafRateBasedRuleMatchPredicate
 * //                   DataId: "STRING_VALUE",
 * //                   Negated: true || false,
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsWafRegionalRateBasedRule: { // AwsWafRegionalRateBasedRuleDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               RateKey: "STRING_VALUE",
 * //               RateLimit: Number("long"),
 * //               RuleId: "STRING_VALUE",
 * //               MatchPredicates: [ // AwsWafRegionalRateBasedRuleMatchPredicateList
 * //                 { // AwsWafRegionalRateBasedRuleMatchPredicate
 * //                   DataId: "STRING_VALUE",
 * //                   Negated: true || false,
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsEcrRepository: { // AwsEcrRepositoryDetails
 * //               Arn: "STRING_VALUE",
 * //               ImageScanningConfiguration: { // AwsEcrRepositoryImageScanningConfigurationDetails
 * //                 ScanOnPush: true || false,
 * //               },
 * //               ImageTagMutability: "STRING_VALUE",
 * //               LifecyclePolicy: { // AwsEcrRepositoryLifecyclePolicyDetails
 * //                 LifecyclePolicyText: "STRING_VALUE",
 * //                 RegistryId: "STRING_VALUE",
 * //               },
 * //               RepositoryName: "STRING_VALUE",
 * //               RepositoryPolicyText: "STRING_VALUE",
 * //             },
 * //             AwsEksCluster: { // AwsEksClusterDetails
 * //               Arn: "STRING_VALUE",
 * //               CertificateAuthorityData: "STRING_VALUE",
 * //               ClusterStatus: "STRING_VALUE",
 * //               Endpoint: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               ResourcesVpcConfig: { // AwsEksClusterResourcesVpcConfigDetails
 * //                 SecurityGroupIds: "<NonEmptyStringList>",
 * //                 SubnetIds: "<NonEmptyStringList>",
 * //                 EndpointPublicAccess: true || false,
 * //               },
 * //               RoleArn: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //               Logging: { // AwsEksClusterLoggingDetails
 * //                 ClusterLogging: [ // AwsEksClusterLoggingClusterLoggingList
 * //                   { // AwsEksClusterLoggingClusterLoggingDetails
 * //                     Enabled: true || false,
 * //                     Types: "<NonEmptyStringList>",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             AwsNetworkFirewallFirewallPolicy: { // AwsNetworkFirewallFirewallPolicyDetails
 * //               FirewallPolicy: { // FirewallPolicyDetails
 * //                 StatefulRuleGroupReferences: [ // FirewallPolicyStatefulRuleGroupReferencesList
 * //                   { // FirewallPolicyStatefulRuleGroupReferencesDetails
 * //                     ResourceArn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 StatelessCustomActions: [ // FirewallPolicyStatelessCustomActionsList
 * //                   { // FirewallPolicyStatelessCustomActionsDetails
 * //                     ActionDefinition: { // StatelessCustomActionDefinition
 * //                       PublishMetricAction: { // StatelessCustomPublishMetricAction
 * //                         Dimensions: [ // StatelessCustomPublishMetricActionDimensionsList
 * //                           { // StatelessCustomPublishMetricActionDimension
 * //                             Value: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     ActionName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 StatelessDefaultActions: "<NonEmptyStringList>",
 * //                 StatelessFragmentDefaultActions: "<NonEmptyStringList>",
 * //                 StatelessRuleGroupReferences: [ // FirewallPolicyStatelessRuleGroupReferencesList
 * //                   { // FirewallPolicyStatelessRuleGroupReferencesDetails
 * //                     Priority: Number("int"),
 * //                     ResourceArn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               FirewallPolicyArn: "STRING_VALUE",
 * //               FirewallPolicyId: "STRING_VALUE",
 * //               FirewallPolicyName: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //             AwsNetworkFirewallFirewall: { // AwsNetworkFirewallFirewallDetails
 * //               DeleteProtection: true || false,
 * //               Description: "STRING_VALUE",
 * //               FirewallArn: "STRING_VALUE",
 * //               FirewallId: "STRING_VALUE",
 * //               FirewallName: "STRING_VALUE",
 * //               FirewallPolicyArn: "STRING_VALUE",
 * //               FirewallPolicyChangeProtection: true || false,
 * //               SubnetChangeProtection: true || false,
 * //               SubnetMappings: [ // AwsNetworkFirewallFirewallSubnetMappingsList
 * //                 { // AwsNetworkFirewallFirewallSubnetMappingsDetails
 * //                   SubnetId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               VpcId: "STRING_VALUE",
 * //             },
 * //             AwsNetworkFirewallRuleGroup: { // AwsNetworkFirewallRuleGroupDetails
 * //               Capacity: Number("int"),
 * //               Description: "STRING_VALUE",
 * //               RuleGroup: { // RuleGroupDetails
 * //                 RuleVariables: { // RuleGroupVariables
 * //                   IpSets: { // RuleGroupVariablesIpSetsDetails
 * //                     Definition: "<NonEmptyStringList>",
 * //                   },
 * //                   PortSets: { // RuleGroupVariablesPortSetsDetails
 * //                     Definition: "<NonEmptyStringList>",
 * //                   },
 * //                 },
 * //                 RulesSource: { // RuleGroupSource
 * //                   RulesSourceList: { // RuleGroupSourceListDetails
 * //                     GeneratedRulesType: "STRING_VALUE",
 * //                     TargetTypes: "<NonEmptyStringList>",
 * //                     Targets: "<NonEmptyStringList>",
 * //                   },
 * //                   RulesString: "STRING_VALUE",
 * //                   StatefulRules: [ // RuleGroupSourceStatefulRulesList
 * //                     { // RuleGroupSourceStatefulRulesDetails
 * //                       Action: "STRING_VALUE",
 * //                       Header: { // RuleGroupSourceStatefulRulesHeaderDetails
 * //                         Destination: "STRING_VALUE",
 * //                         DestinationPort: "STRING_VALUE",
 * //                         Direction: "STRING_VALUE",
 * //                         Protocol: "STRING_VALUE",
 * //                         Source: "STRING_VALUE",
 * //                         SourcePort: "STRING_VALUE",
 * //                       },
 * //                       RuleOptions: [ // RuleGroupSourceStatefulRulesOptionsList
 * //                         { // RuleGroupSourceStatefulRulesOptionsDetails
 * //                           Keyword: "STRING_VALUE",
 * //                           Settings: [ // RuleGroupSourceStatefulRulesRuleOptionsSettingsList
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                       ],
 * //                     },
 * //                   ],
 * //                   StatelessRulesAndCustomActions: { // RuleGroupSourceStatelessRulesAndCustomActionsDetails
 * //                     CustomActions: [ // RuleGroupSourceCustomActionsList
 * //                       { // RuleGroupSourceCustomActionsDetails
 * //                         ActionDefinition: {
 * //                           PublishMetricAction: {
 * //                             Dimensions: [
 * //                               {
 * //                                 Value: "STRING_VALUE",
 * //                               },
 * //                             ],
 * //                           },
 * //                         },
 * //                         ActionName: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     StatelessRules: [ // RuleGroupSourceStatelessRulesList
 * //                       { // RuleGroupSourceStatelessRulesDetails
 * //                         Priority: Number("int"),
 * //                         RuleDefinition: { // RuleGroupSourceStatelessRuleDefinition
 * //                           Actions: "<NonEmptyStringList>",
 * //                           MatchAttributes: { // RuleGroupSourceStatelessRuleMatchAttributes
 * //                             DestinationPorts: [ // RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList
 * //                               { // RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts
 * //                                 FromPort: Number("int"),
 * //                                 ToPort: Number("int"),
 * //                               },
 * //                             ],
 * //                             Destinations: [ // RuleGroupSourceStatelessRuleMatchAttributesDestinationsList
 * //                               { // RuleGroupSourceStatelessRuleMatchAttributesDestinations
 * //                                 AddressDefinition: "STRING_VALUE",
 * //                               },
 * //                             ],
 * //                             Protocols: [ // RuleGroupSourceStatelessRuleMatchAttributesProtocolsList
 * //                               Number("int"),
 * //                             ],
 * //                             SourcePorts: [ // RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList
 * //                               { // RuleGroupSourceStatelessRuleMatchAttributesSourcePorts
 * //                                 FromPort: Number("int"),
 * //                                 ToPort: Number("int"),
 * //                               },
 * //                             ],
 * //                             Sources: [ // RuleGroupSourceStatelessRuleMatchAttributesSourcesList
 * //                               { // RuleGroupSourceStatelessRuleMatchAttributesSources
 * //                                 AddressDefinition: "STRING_VALUE",
 * //                               },
 * //                             ],
 * //                             TcpFlags: [ // RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList
 * //                               { // RuleGroupSourceStatelessRuleMatchAttributesTcpFlags
 * //                                 Flags: "<NonEmptyStringList>",
 * //                                 Masks: "<NonEmptyStringList>",
 * //                               },
 * //                             ],
 * //                           },
 * //                         },
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //               },
 * //               RuleGroupArn: "STRING_VALUE",
 * //               RuleGroupId: "STRING_VALUE",
 * //               RuleGroupName: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //             AwsRdsDbSecurityGroup: { // AwsRdsDbSecurityGroupDetails
 * //               DbSecurityGroupArn: "STRING_VALUE",
 * //               DbSecurityGroupDescription: "STRING_VALUE",
 * //               DbSecurityGroupName: "STRING_VALUE",
 * //               Ec2SecurityGroups: [ // AwsRdsDbSecurityGroupEc2SecurityGroups
 * //                 { // AwsRdsDbSecurityGroupEc2SecurityGroup
 * //                   Ec2SecurityGroupId: "STRING_VALUE",
 * //                   Ec2SecurityGroupName: "STRING_VALUE",
 * //                   Ec2SecurityGroupOwnerId: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               IpRanges: [ // AwsRdsDbSecurityGroupIpRanges
 * //                 { // AwsRdsDbSecurityGroupIpRange
 * //                   CidrIp: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               OwnerId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //             },
 * //             AwsKinesisStream: { // AwsKinesisStreamDetails
 * //               Name: "STRING_VALUE",
 * //               Arn: "STRING_VALUE",
 * //               StreamEncryption: { // AwsKinesisStreamStreamEncryptionDetails
 * //                 EncryptionType: "STRING_VALUE",
 * //                 KeyId: "STRING_VALUE",
 * //               },
 * //               ShardCount: Number("int"),
 * //               RetentionPeriodHours: Number("int"),
 * //             },
 * //             AwsEc2TransitGateway: { // AwsEc2TransitGatewayDetails
 * //               Id: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               DefaultRouteTablePropagation: "STRING_VALUE",
 * //               AutoAcceptSharedAttachments: "STRING_VALUE",
 * //               DefaultRouteTableAssociation: "STRING_VALUE",
 * //               TransitGatewayCidrBlocks: "<NonEmptyStringList>",
 * //               AssociationDefaultRouteTableId: "STRING_VALUE",
 * //               PropagationDefaultRouteTableId: "STRING_VALUE",
 * //               VpnEcmpSupport: "STRING_VALUE",
 * //               DnsSupport: "STRING_VALUE",
 * //               MulticastSupport: "STRING_VALUE",
 * //               AmazonSideAsn: Number("int"),
 * //             },
 * //             AwsEfsAccessPoint: { // AwsEfsAccessPointDetails
 * //               AccessPointId: "STRING_VALUE",
 * //               Arn: "STRING_VALUE",
 * //               ClientToken: "STRING_VALUE",
 * //               FileSystemId: "STRING_VALUE",
 * //               PosixUser: { // AwsEfsAccessPointPosixUserDetails
 * //                 Gid: "STRING_VALUE",
 * //                 SecondaryGids: "<NonEmptyStringList>",
 * //                 Uid: "STRING_VALUE",
 * //               },
 * //               RootDirectory: { // AwsEfsAccessPointRootDirectoryDetails
 * //                 CreationInfo: { // AwsEfsAccessPointRootDirectoryCreationInfoDetails
 * //                   OwnerGid: "STRING_VALUE",
 * //                   OwnerUid: "STRING_VALUE",
 * //                   Permissions: "STRING_VALUE",
 * //                 },
 * //                 Path: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsCloudFormationStack: { // AwsCloudFormationStackDetails
 * //               Capabilities: "<NonEmptyStringList>",
 * //               CreationTime: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               DisableRollback: true || false,
 * //               DriftInformation: { // AwsCloudFormationStackDriftInformationDetails
 * //                 StackDriftStatus: "STRING_VALUE",
 * //               },
 * //               EnableTerminationProtection: true || false,
 * //               LastUpdatedTime: "STRING_VALUE",
 * //               NotificationArns: "<NonEmptyStringList>",
 * //               Outputs: [ // AwsCloudFormationStackOutputsList
 * //                 { // AwsCloudFormationStackOutputsDetails
 * //                   Description: "STRING_VALUE",
 * //                   OutputKey: "STRING_VALUE",
 * //                   OutputValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RoleArn: "STRING_VALUE",
 * //               StackId: "STRING_VALUE",
 * //               StackName: "STRING_VALUE",
 * //               StackStatus: "STRING_VALUE",
 * //               StackStatusReason: "STRING_VALUE",
 * //               TimeoutInMinutes: Number("int"),
 * //             },
 * //             AwsCloudWatchAlarm: { // AwsCloudWatchAlarmDetails
 * //               ActionsEnabled: true || false,
 * //               AlarmActions: "<NonEmptyStringList>",
 * //               AlarmArn: "STRING_VALUE",
 * //               AlarmConfigurationUpdatedTimestamp: "STRING_VALUE",
 * //               AlarmDescription: "STRING_VALUE",
 * //               AlarmName: "STRING_VALUE",
 * //               ComparisonOperator: "STRING_VALUE",
 * //               DatapointsToAlarm: Number("int"),
 * //               Dimensions: [ // AwsCloudWatchAlarmDimensionsList
 * //                 { // AwsCloudWatchAlarmDimensionsDetails
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               EvaluateLowSampleCountPercentile: "STRING_VALUE",
 * //               EvaluationPeriods: Number("int"),
 * //               ExtendedStatistic: "STRING_VALUE",
 * //               InsufficientDataActions: "<NonEmptyStringList>",
 * //               MetricName: "STRING_VALUE",
 * //               Namespace: "STRING_VALUE",
 * //               OkActions: "<NonEmptyStringList>",
 * //               Period: Number("int"),
 * //               Statistic: "STRING_VALUE",
 * //               Threshold: Number("double"),
 * //               ThresholdMetricId: "STRING_VALUE",
 * //               TreatMissingData: "STRING_VALUE",
 * //               Unit: "STRING_VALUE",
 * //             },
 * //             AwsEc2VpcPeeringConnection: { // AwsEc2VpcPeeringConnectionDetails
 * //               AccepterVpcInfo: { // AwsEc2VpcPeeringConnectionVpcInfoDetails
 * //                 CidrBlock: "STRING_VALUE",
 * //                 CidrBlockSet: [ // VpcInfoCidrBlockSetList
 * //                   { // VpcInfoCidrBlockSetDetails
 * //                     CidrBlock: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Ipv6CidrBlockSet: [ // VpcInfoIpv6CidrBlockSetList
 * //                   { // VpcInfoIpv6CidrBlockSetDetails
 * //                     Ipv6CidrBlock: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 OwnerId: "STRING_VALUE",
 * //                 PeeringOptions: { // VpcInfoPeeringOptionsDetails
 * //                   AllowDnsResolutionFromRemoteVpc: true || false,
 * //                   AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //                   AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //                 },
 * //                 Region: "STRING_VALUE",
 * //                 VpcId: "STRING_VALUE",
 * //               },
 * //               ExpirationTime: "STRING_VALUE",
 * //               RequesterVpcInfo: {
 * //                 CidrBlock: "STRING_VALUE",
 * //                 CidrBlockSet: [
 * //                   {
 * //                     CidrBlock: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Ipv6CidrBlockSet: [
 * //                   {
 * //                     Ipv6CidrBlock: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 OwnerId: "STRING_VALUE",
 * //                 PeeringOptions: {
 * //                   AllowDnsResolutionFromRemoteVpc: true || false,
 * //                   AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //                   AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //                 },
 * //                 Region: "STRING_VALUE",
 * //                 VpcId: "STRING_VALUE",
 * //               },
 * //               Status: { // AwsEc2VpcPeeringConnectionStatusDetails
 * //                 Code: "STRING_VALUE",
 * //                 Message: "STRING_VALUE",
 * //               },
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //             },
 * //             AwsWafRegionalRuleGroup: { // AwsWafRegionalRuleGroupDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               RuleGroupId: "STRING_VALUE",
 * //               Rules: [ // AwsWafRegionalRuleGroupRulesList
 * //                 { // AwsWafRegionalRuleGroupRulesDetails
 * //                   Action: { // AwsWafRegionalRuleGroupRulesActionDetails
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   Priority: Number("int"),
 * //                   RuleId: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsWafRegionalRule: { // AwsWafRegionalRuleDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               PredicateList: [ // AwsWafRegionalRulePredicateList
 * //                 { // AwsWafRegionalRulePredicateListDetails
 * //                   DataId: "STRING_VALUE",
 * //                   Negated: true || false,
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RuleId: "STRING_VALUE",
 * //             },
 * //             AwsWafRegionalWebAcl: { // AwsWafRegionalWebAclDetails
 * //               DefaultAction: "STRING_VALUE",
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               RulesList: [ // AwsWafRegionalWebAclRulesList
 * //                 { // AwsWafRegionalWebAclRulesListDetails
 * //                   Action: { // AwsWafRegionalWebAclRulesListActionDetails
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   OverrideAction: { // AwsWafRegionalWebAclRulesListOverrideActionDetails
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   Priority: Number("int"),
 * //                   RuleId: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               WebAclId: "STRING_VALUE",
 * //             },
 * //             AwsWafRule: { // AwsWafRuleDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               PredicateList: [ // AwsWafRulePredicateList
 * //                 { // AwsWafRulePredicateListDetails
 * //                   DataId: "STRING_VALUE",
 * //                   Negated: true || false,
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RuleId: "STRING_VALUE",
 * //             },
 * //             AwsWafRuleGroup: { // AwsWafRuleGroupDetails
 * //               MetricName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               RuleGroupId: "STRING_VALUE",
 * //               Rules: [ // AwsWafRuleGroupRulesList
 * //                 { // AwsWafRuleGroupRulesDetails
 * //                   Action: { // AwsWafRuleGroupRulesActionDetails
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                   Priority: Number("int"),
 * //                   RuleId: "STRING_VALUE",
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsEcsTask: { // AwsEcsTaskDetails
 * //               ClusterArn: "STRING_VALUE",
 * //               TaskDefinitionArn: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //               CreatedAt: "STRING_VALUE",
 * //               StartedAt: "STRING_VALUE",
 * //               StartedBy: "STRING_VALUE",
 * //               Group: "STRING_VALUE",
 * //               Volumes: [ // AwsEcsTaskVolumeDetailsList
 * //                 { // AwsEcsTaskVolumeDetails
 * //                   Name: "STRING_VALUE",
 * //                   Host: { // AwsEcsTaskVolumeHostDetails
 * //                     SourcePath: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               Containers: [ // AwsEcsContainerDetailsList
 * //                 {
 * //                   Name: "STRING_VALUE",
 * //                   Image: "STRING_VALUE",
 * //                   MountPoints: [
 * //                     {
 * //                       SourceVolume: "STRING_VALUE",
 * //                       ContainerPath: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Privileged: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             AwsBackupBackupVault: { // AwsBackupBackupVaultDetails
 * //               BackupVaultArn: "STRING_VALUE",
 * //               BackupVaultName: "STRING_VALUE",
 * //               EncryptionKeyArn: "STRING_VALUE",
 * //               Notifications: { // AwsBackupBackupVaultNotificationsDetails
 * //                 BackupVaultEvents: "<NonEmptyStringList>",
 * //                 SnsTopicArn: "STRING_VALUE",
 * //               },
 * //               AccessPolicy: "STRING_VALUE",
 * //             },
 * //             AwsBackupBackupPlan: { // AwsBackupBackupPlanDetails
 * //               BackupPlan: { // AwsBackupBackupPlanBackupPlanDetails
 * //                 BackupPlanName: "STRING_VALUE",
 * //                 AdvancedBackupSettings: [ // AwsBackupBackupPlanAdvancedBackupSettingsList
 * //                   { // AwsBackupBackupPlanAdvancedBackupSettingsDetails
 * //                     BackupOptions: "<FieldMap>",
 * //                     ResourceType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 BackupPlanRule: [ // AwsBackupBackupPlanRuleList
 * //                   { // AwsBackupBackupPlanRuleDetails
 * //                     TargetBackupVault: "STRING_VALUE",
 * //                     StartWindowMinutes: Number("long"),
 * //                     ScheduleExpression: "STRING_VALUE",
 * //                     RuleName: "STRING_VALUE",
 * //                     RuleId: "STRING_VALUE",
 * //                     EnableContinuousBackup: true || false,
 * //                     CompletionWindowMinutes: Number("long"),
 * //                     CopyActions: [ // AwsBackupBackupPlanRuleCopyActionsList
 * //                       { // AwsBackupBackupPlanRuleCopyActionsDetails
 * //                         DestinationBackupVaultArn: "STRING_VALUE",
 * //                         Lifecycle: { // AwsBackupBackupPlanLifecycleDetails
 * //                           DeleteAfterDays: Number("long"),
 * //                           MoveToColdStorageAfterDays: Number("long"),
 * //                         },
 * //                       },
 * //                     ],
 * //                     Lifecycle: {
 * //                       DeleteAfterDays: Number("long"),
 * //                       MoveToColdStorageAfterDays: Number("long"),
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               BackupPlanArn: "STRING_VALUE",
 * //               BackupPlanId: "STRING_VALUE",
 * //               VersionId: "STRING_VALUE",
 * //             },
 * //             AwsBackupRecoveryPoint: { // AwsBackupRecoveryPointDetails
 * //               BackupSizeInBytes: Number("long"),
 * //               BackupVaultArn: "STRING_VALUE",
 * //               BackupVaultName: "STRING_VALUE",
 * //               CalculatedLifecycle: { // AwsBackupRecoveryPointCalculatedLifecycleDetails
 * //                 DeleteAt: "STRING_VALUE",
 * //                 MoveToColdStorageAt: "STRING_VALUE",
 * //               },
 * //               CompletionDate: "STRING_VALUE",
 * //               CreatedBy: { // AwsBackupRecoveryPointCreatedByDetails
 * //                 BackupPlanArn: "STRING_VALUE",
 * //                 BackupPlanId: "STRING_VALUE",
 * //                 BackupPlanVersion: "STRING_VALUE",
 * //                 BackupRuleId: "STRING_VALUE",
 * //               },
 * //               CreationDate: "STRING_VALUE",
 * //               EncryptionKeyArn: "STRING_VALUE",
 * //               IamRoleArn: "STRING_VALUE",
 * //               IsEncrypted: true || false,
 * //               LastRestoreTime: "STRING_VALUE",
 * //               Lifecycle: { // AwsBackupRecoveryPointLifecycleDetails
 * //                 DeleteAfterDays: Number("long"),
 * //                 MoveToColdStorageAfterDays: Number("long"),
 * //               },
 * //               RecoveryPointArn: "STRING_VALUE",
 * //               ResourceArn: "STRING_VALUE",
 * //               ResourceType: "STRING_VALUE",
 * //               SourceBackupVaultArn: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               StatusMessage: "STRING_VALUE",
 * //               StorageClass: "STRING_VALUE",
 * //             },
 * //             AwsEc2LaunchTemplate: { // AwsEc2LaunchTemplateDetails
 * //               LaunchTemplateName: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               LaunchTemplateData: { // AwsEc2LaunchTemplateDataDetails
 * //                 BlockDeviceMappingSet: [ // AwsEc2LaunchTemplateDataBlockDeviceMappingSetList
 * //                   { // AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails
 * //                     DeviceName: "STRING_VALUE",
 * //                     Ebs: { // AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails
 * //                       DeleteOnTermination: true || false,
 * //                       Encrypted: true || false,
 * //                       Iops: Number("int"),
 * //                       KmsKeyId: "STRING_VALUE",
 * //                       SnapshotId: "STRING_VALUE",
 * //                       Throughput: Number("int"),
 * //                       VolumeSize: Number("int"),
 * //                       VolumeType: "STRING_VALUE",
 * //                     },
 * //                     NoDevice: "STRING_VALUE",
 * //                     VirtualName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 CapacityReservationSpecification: { // AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails
 * //                   CapacityReservationPreference: "STRING_VALUE",
 * //                   CapacityReservationTarget: { // AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails
 * //                     CapacityReservationId: "STRING_VALUE",
 * //                     CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 CpuOptions: { // AwsEc2LaunchTemplateDataCpuOptionsDetails
 * //                   CoreCount: Number("int"),
 * //                   ThreadsPerCore: Number("int"),
 * //                 },
 * //                 CreditSpecification: { // AwsEc2LaunchTemplateDataCreditSpecificationDetails
 * //                   CpuCredits: "STRING_VALUE",
 * //                 },
 * //                 DisableApiStop: true || false,
 * //                 DisableApiTermination: true || false,
 * //                 EbsOptimized: true || false,
 * //                 ElasticGpuSpecificationSet: [ // AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList
 * //                   { // AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 ElasticInferenceAcceleratorSet: [ // AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList
 * //                   { // AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails
 * //                     Count: Number("int"),
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 EnclaveOptions: { // AwsEc2LaunchTemplateDataEnclaveOptionsDetails
 * //                   Enabled: true || false,
 * //                 },
 * //                 HibernationOptions: { // AwsEc2LaunchTemplateDataHibernationOptionsDetails
 * //                   Configured: true || false,
 * //                 },
 * //                 IamInstanceProfile: { // AwsEc2LaunchTemplateDataIamInstanceProfileDetails
 * //                   Arn: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //                 ImageId: "STRING_VALUE",
 * //                 InstanceInitiatedShutdownBehavior: "STRING_VALUE",
 * //                 InstanceMarketOptions: { // AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails
 * //                   MarketType: "STRING_VALUE",
 * //                   SpotOptions: { // AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails
 * //                     BlockDurationMinutes: Number("int"),
 * //                     InstanceInterruptionBehavior: "STRING_VALUE",
 * //                     MaxPrice: "STRING_VALUE",
 * //                     SpotInstanceType: "STRING_VALUE",
 * //                     ValidUntil: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 InstanceRequirements: { // AwsEc2LaunchTemplateDataInstanceRequirementsDetails
 * //                   AcceleratorCount: { // AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                   AcceleratorManufacturers: "<NonEmptyStringList>",
 * //                   AcceleratorNames: "<NonEmptyStringList>",
 * //                   AcceleratorTotalMemoryMiB: { // AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                   AcceleratorTypes: "<NonEmptyStringList>",
 * //                   BareMetal: "STRING_VALUE",
 * //                   BaselineEbsBandwidthMbps: { // AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                   BurstablePerformance: "STRING_VALUE",
 * //                   CpuManufacturers: "<NonEmptyStringList>",
 * //                   ExcludedInstanceTypes: "<NonEmptyStringList>",
 * //                   InstanceGenerations: "<NonEmptyStringList>",
 * //                   LocalStorage: "STRING_VALUE",
 * //                   LocalStorageTypes: "<NonEmptyStringList>",
 * //                   MemoryGiBPerVCpu: { // AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails
 * //                     Max: Number("double"),
 * //                     Min: Number("double"),
 * //                   },
 * //                   MemoryMiB: { // AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                   NetworkInterfaceCount: { // AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                   OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //                   RequireHibernateSupport: true || false,
 * //                   SpotMaxPricePercentageOverLowestPrice: Number("int"),
 * //                   TotalLocalStorageGB: { // AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails
 * //                     Max: Number("double"),
 * //                     Min: Number("double"),
 * //                   },
 * //                   VCpuCount: { // AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails
 * //                     Max: Number("int"),
 * //                     Min: Number("int"),
 * //                   },
 * //                 },
 * //                 InstanceType: "STRING_VALUE",
 * //                 KernelId: "STRING_VALUE",
 * //                 KeyName: "STRING_VALUE",
 * //                 LicenseSet: [ // AwsEc2LaunchTemplateDataLicenseSetList
 * //                   { // AwsEc2LaunchTemplateDataLicenseSetDetails
 * //                     LicenseConfigurationArn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 MaintenanceOptions: { // AwsEc2LaunchTemplateDataMaintenanceOptionsDetails
 * //                   AutoRecovery: "STRING_VALUE",
 * //                 },
 * //                 MetadataOptions: { // AwsEc2LaunchTemplateDataMetadataOptionsDetails
 * //                   HttpEndpoint: "STRING_VALUE",
 * //                   HttpProtocolIpv6: "STRING_VALUE",
 * //                   HttpTokens: "STRING_VALUE",
 * //                   HttpPutResponseHopLimit: Number("int"),
 * //                   InstanceMetadataTags: "STRING_VALUE",
 * //                 },
 * //                 Monitoring: { // AwsEc2LaunchTemplateDataMonitoringDetails
 * //                   Enabled: true || false,
 * //                 },
 * //                 NetworkInterfaceSet: [ // AwsEc2LaunchTemplateDataNetworkInterfaceSetList
 * //                   { // AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails
 * //                     AssociateCarrierIpAddress: true || false,
 * //                     AssociatePublicIpAddress: true || false,
 * //                     DeleteOnTermination: true || false,
 * //                     Description: "STRING_VALUE",
 * //                     DeviceIndex: Number("int"),
 * //                     Groups: "<NonEmptyStringList>",
 * //                     InterfaceType: "STRING_VALUE",
 * //                     Ipv4PrefixCount: Number("int"),
 * //                     Ipv4Prefixes: [ // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList
 * //                       { // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails
 * //                         Ipv4Prefix: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     Ipv6AddressCount: Number("int"),
 * //                     Ipv6Addresses: [ // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList
 * //                       { // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails
 * //                         Ipv6Address: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     Ipv6PrefixCount: Number("int"),
 * //                     Ipv6Prefixes: [ // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList
 * //                       { // AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails
 * //                         Ipv6Prefix: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     NetworkCardIndex: Number("int"),
 * //                     NetworkInterfaceId: "STRING_VALUE",
 * //                     PrivateIpAddress: "STRING_VALUE",
 * //                     PrivateIpAddresses: [ // AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList
 * //                       { // AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails
 * //                         Primary: true || false,
 * //                         PrivateIpAddress: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     SecondaryPrivateIpAddressCount: Number("int"),
 * //                     SubnetId: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Placement: { // AwsEc2LaunchTemplateDataPlacementDetails
 * //                   Affinity: "STRING_VALUE",
 * //                   AvailabilityZone: "STRING_VALUE",
 * //                   GroupName: "STRING_VALUE",
 * //                   HostId: "STRING_VALUE",
 * //                   HostResourceGroupArn: "STRING_VALUE",
 * //                   PartitionNumber: Number("int"),
 * //                   SpreadDomain: "STRING_VALUE",
 * //                   Tenancy: "STRING_VALUE",
 * //                 },
 * //                 PrivateDnsNameOptions: { // AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails
 * //                   EnableResourceNameDnsAAAARecord: true || false,
 * //                   EnableResourceNameDnsARecord: true || false,
 * //                   HostnameType: "STRING_VALUE",
 * //                 },
 * //                 RamDiskId: "STRING_VALUE",
 * //                 SecurityGroupIdSet: "<NonEmptyStringList>",
 * //                 SecurityGroupSet: "<NonEmptyStringList>",
 * //                 UserData: "STRING_VALUE",
 * //               },
 * //               DefaultVersionNumber: Number("long"),
 * //               LatestVersionNumber: Number("long"),
 * //             },
 * //             AwsSageMakerNotebookInstance: { // AwsSageMakerNotebookInstanceDetails
 * //               AcceleratorTypes: "<NonEmptyStringList>",
 * //               AdditionalCodeRepositories: "<NonEmptyStringList>",
 * //               DefaultCodeRepository: "STRING_VALUE",
 * //               DirectInternetAccess: "STRING_VALUE",
 * //               FailureReason: "STRING_VALUE",
 * //               InstanceMetadataServiceConfiguration: { // AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails
 * //                 MinimumInstanceMetadataServiceVersion: "STRING_VALUE",
 * //               },
 * //               InstanceType: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               NotebookInstanceArn: "STRING_VALUE",
 * //               NotebookInstanceLifecycleConfigName: "STRING_VALUE",
 * //               NotebookInstanceName: "STRING_VALUE",
 * //               NotebookInstanceStatus: "STRING_VALUE",
 * //               PlatformIdentifier: "STRING_VALUE",
 * //               RoleArn: "STRING_VALUE",
 * //               RootAccess: "STRING_VALUE",
 * //               SecurityGroups: "<NonEmptyStringList>",
 * //               SubnetId: "STRING_VALUE",
 * //               Url: "STRING_VALUE",
 * //               VolumeSizeInGB: Number("int"),
 * //             },
 * //             AwsWafv2WebAcl: { // AwsWafv2WebAclDetails
 * //               Name: "STRING_VALUE",
 * //               Arn: "STRING_VALUE",
 * //               ManagedbyFirewallManager: true || false,
 * //               Id: "STRING_VALUE",
 * //               Capacity: Number("long"),
 * //               CaptchaConfig: { // AwsWafv2WebAclCaptchaConfigDetails
 * //                 ImmunityTimeProperty: { // AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails
 * //                   ImmunityTime: Number("long"),
 * //                 },
 * //               },
 * //               DefaultAction: { // AwsWafv2WebAclActionDetails
 * //                 Allow: { // AwsWafv2ActionAllowDetails
 * //                   CustomRequestHandling: { // AwsWafv2CustomRequestHandlingDetails
 * //                     InsertHeaders: [ // AwsWafv2InsertHeadersList
 * //                       { // AwsWafv2CustomHttpHeader
 * //                         Name: "STRING_VALUE",
 * //                         Value: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //                 Block: { // AwsWafv2ActionBlockDetails
 * //                   CustomResponse: { // AwsWafv2CustomResponseDetails
 * //                     CustomResponseBodyKey: "STRING_VALUE",
 * //                     ResponseCode: Number("int"),
 * //                     ResponseHeaders: [
 * //                       {
 * //                         Name: "STRING_VALUE",
 * //                         Value: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //               },
 * //               Description: "STRING_VALUE",
 * //               Rules: [ // AwsWafv2RulesList
 * //                 { // AwsWafv2RulesDetails
 * //                   Action: { // AwsWafv2RulesActionDetails
 * //                     Allow: {
 * //                       CustomRequestHandling: {
 * //                         InsertHeaders: [
 * //                           {
 * //                             Name: "STRING_VALUE",
 * //                             Value: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     Block: {
 * //                       CustomResponse: {
 * //                         CustomResponseBodyKey: "STRING_VALUE",
 * //                         ResponseCode: Number("int"),
 * //                         ResponseHeaders: [
 * //                           {
 * //                             Name: "STRING_VALUE",
 * //                             Value: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     Captcha: { // AwsWafv2RulesActionCaptchaDetails
 * //                       CustomRequestHandling: {
 * //                         InsertHeaders: [
 * //                           {
 * //                             Name: "STRING_VALUE",
 * //                             Value: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     Count: { // AwsWafv2RulesActionCountDetails
 * //                       CustomRequestHandling: {
 * //                         InsertHeaders: "<AwsWafv2InsertHeadersList>",
 * //                       },
 * //                     },
 * //                   },
 * //                   Name: "STRING_VALUE",
 * //                   OverrideAction: "STRING_VALUE",
 * //                   Priority: Number("int"),
 * //                   VisibilityConfig: { // AwsWafv2VisibilityConfigDetails
 * //                     CloudWatchMetricsEnabled: true || false,
 * //                     MetricName: "STRING_VALUE",
 * //                     SampledRequestsEnabled: true || false,
 * //                   },
 * //                 },
 * //               ],
 * //               VisibilityConfig: {
 * //                 CloudWatchMetricsEnabled: true || false,
 * //                 MetricName: "STRING_VALUE",
 * //                 SampledRequestsEnabled: true || false,
 * //               },
 * //             },
 * //             AwsWafv2RuleGroup: { // AwsWafv2RuleGroupDetails
 * //               Capacity: Number("long"),
 * //               Description: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               Arn: "STRING_VALUE",
 * //               Rules: [
 * //                 {
 * //                   Action: {
 * //                     Allow: {
 * //                       CustomRequestHandling: {
 * //                         InsertHeaders: "<AwsWafv2InsertHeadersList>",
 * //                       },
 * //                     },
 * //                     Block: {
 * //                       CustomResponse: {
 * //                         CustomResponseBodyKey: "STRING_VALUE",
 * //                         ResponseCode: Number("int"),
 * //                         ResponseHeaders: "<AwsWafv2InsertHeadersList>",
 * //                       },
 * //                     },
 * //                     Captcha: {
 * //                       CustomRequestHandling: "<AwsWafv2CustomRequestHandlingDetails>",
 * //                     },
 * //                     Count: {
 * //                       CustomRequestHandling: "<AwsWafv2CustomRequestHandlingDetails>",
 * //                     },
 * //                   },
 * //                   Name: "STRING_VALUE",
 * //                   OverrideAction: "STRING_VALUE",
 * //                   Priority: Number("int"),
 * //                   VisibilityConfig: {
 * //                     CloudWatchMetricsEnabled: true || false,
 * //                     MetricName: "STRING_VALUE",
 * //                     SampledRequestsEnabled: true || false,
 * //                   },
 * //                 },
 * //               ],
 * //               Scope: "STRING_VALUE",
 * //               VisibilityConfig: {
 * //                 CloudWatchMetricsEnabled: true || false,
 * //                 MetricName: "STRING_VALUE",
 * //                 SampledRequestsEnabled: true || false,
 * //               },
 * //             },
 * //             AwsEc2RouteTable: { // AwsEc2RouteTableDetails
 * //               AssociationSet: [ // AssociationSetList
 * //                 { // AssociationSetDetails
 * //                   AssociationState: { // AssociationStateDetails
 * //                     State: "STRING_VALUE",
 * //                     StatusMessage: "STRING_VALUE",
 * //                   },
 * //                   GatewayId: "STRING_VALUE",
 * //                   Main: true || false,
 * //                   RouteTableAssociationId: "STRING_VALUE",
 * //                   RouteTableId: "STRING_VALUE",
 * //                   SubnetId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               OwnerId: "STRING_VALUE",
 * //               PropagatingVgwSet: [ // PropagatingVgwSetList
 * //                 { // PropagatingVgwSetDetails
 * //                   GatewayId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //               RouteSet: [ // RouteSetList
 * //                 { // RouteSetDetails
 * //                   CarrierGatewayId: "STRING_VALUE",
 * //                   CoreNetworkArn: "STRING_VALUE",
 * //                   DestinationCidrBlock: "STRING_VALUE",
 * //                   DestinationIpv6CidrBlock: "STRING_VALUE",
 * //                   DestinationPrefixListId: "STRING_VALUE",
 * //                   EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //                   GatewayId: "STRING_VALUE",
 * //                   InstanceId: "STRING_VALUE",
 * //                   InstanceOwnerId: "STRING_VALUE",
 * //                   LocalGatewayId: "STRING_VALUE",
 * //                   NatGatewayId: "STRING_VALUE",
 * //                   NetworkInterfaceId: "STRING_VALUE",
 * //                   Origin: "STRING_VALUE",
 * //                   State: "STRING_VALUE",
 * //                   TransitGatewayId: "STRING_VALUE",
 * //                   VpcPeeringConnectionId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               VpcId: "STRING_VALUE",
 * //             },
 * //             AwsAmazonMqBroker: { // AwsAmazonMqBrokerDetails
 * //               AuthenticationStrategy: "STRING_VALUE",
 * //               AutoMinorVersionUpgrade: true || false,
 * //               BrokerArn: "STRING_VALUE",
 * //               BrokerName: "STRING_VALUE",
 * //               DeploymentMode: "STRING_VALUE",
 * //               EncryptionOptions: { // AwsAmazonMqBrokerEncryptionOptionsDetails
 * //                 KmsKeyId: "STRING_VALUE",
 * //                 UseAwsOwnedKey: true || false,
 * //               },
 * //               EngineType: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               HostInstanceType: "STRING_VALUE",
 * //               BrokerId: "STRING_VALUE",
 * //               LdapServerMetadata: { // AwsAmazonMqBrokerLdapServerMetadataDetails
 * //                 Hosts: "<StringList>",
 * //                 RoleBase: "STRING_VALUE",
 * //                 RoleName: "STRING_VALUE",
 * //                 RoleSearchMatching: "STRING_VALUE",
 * //                 RoleSearchSubtree: true || false,
 * //                 ServiceAccountUsername: "STRING_VALUE",
 * //                 UserBase: "STRING_VALUE",
 * //                 UserRoleName: "STRING_VALUE",
 * //                 UserSearchMatching: "STRING_VALUE",
 * //                 UserSearchSubtree: true || false,
 * //               },
 * //               Logs: { // AwsAmazonMqBrokerLogsDetails
 * //                 Audit: true || false,
 * //                 General: true || false,
 * //                 AuditLogGroup: "STRING_VALUE",
 * //                 GeneralLogGroup: "STRING_VALUE",
 * //                 Pending: { // AwsAmazonMqBrokerLogsPendingDetails
 * //                   Audit: true || false,
 * //                   General: true || false,
 * //                 },
 * //               },
 * //               MaintenanceWindowStartTime: { // AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails
 * //                 DayOfWeek: "STRING_VALUE",
 * //                 TimeOfDay: "STRING_VALUE",
 * //                 TimeZone: "STRING_VALUE",
 * //               },
 * //               PubliclyAccessible: true || false,
 * //               SecurityGroups: "<StringList>",
 * //               StorageType: "STRING_VALUE",
 * //               SubnetIds: "<StringList>",
 * //               Users: [ // AwsAmazonMqBrokerUsersList
 * //                 { // AwsAmazonMqBrokerUsersDetails
 * //                   PendingChange: "STRING_VALUE",
 * //                   Username: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsAppSyncGraphQlApi: { // AwsAppSyncGraphQlApiDetails
 * //               ApiId: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               OpenIdConnectConfig: { // AwsAppSyncGraphQlApiOpenIdConnectConfigDetails
 * //                 AuthTtL: Number("long"),
 * //                 ClientId: "STRING_VALUE",
 * //                 IatTtL: Number("long"),
 * //                 Issuer: "STRING_VALUE",
 * //               },
 * //               Name: "STRING_VALUE",
 * //               LambdaAuthorizerConfig: { // AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails
 * //                 AuthorizerResultTtlInSeconds: Number("int"),
 * //                 AuthorizerUri: "STRING_VALUE",
 * //                 IdentityValidationExpression: "STRING_VALUE",
 * //               },
 * //               XrayEnabled: true || false,
 * //               Arn: "STRING_VALUE",
 * //               UserPoolConfig: { // AwsAppSyncGraphQlApiUserPoolConfigDetails
 * //                 AppIdClientRegex: "STRING_VALUE",
 * //                 AwsRegion: "STRING_VALUE",
 * //                 DefaultAction: "STRING_VALUE",
 * //                 UserPoolId: "STRING_VALUE",
 * //               },
 * //               AuthenticationType: "STRING_VALUE",
 * //               LogConfig: { // AwsAppSyncGraphQlApiLogConfigDetails
 * //                 CloudWatchLogsRoleArn: "STRING_VALUE",
 * //                 ExcludeVerboseContent: true || false,
 * //                 FieldLogLevel: "STRING_VALUE",
 * //               },
 * //               AdditionalAuthenticationProviders: [ // AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList
 * //                 { // AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails
 * //                   AuthenticationType: "STRING_VALUE",
 * //                   LambdaAuthorizerConfig: {
 * //                     AuthorizerResultTtlInSeconds: Number("int"),
 * //                     AuthorizerUri: "STRING_VALUE",
 * //                     IdentityValidationExpression: "STRING_VALUE",
 * //                   },
 * //                   OpenIdConnectConfig: {
 * //                     AuthTtL: Number("long"),
 * //                     ClientId: "STRING_VALUE",
 * //                     IatTtL: Number("long"),
 * //                     Issuer: "STRING_VALUE",
 * //                   },
 * //                   UserPoolConfig: {
 * //                     AppIdClientRegex: "STRING_VALUE",
 * //                     AwsRegion: "STRING_VALUE",
 * //                     DefaultAction: "STRING_VALUE",
 * //                     UserPoolId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               WafWebAclArn: "STRING_VALUE",
 * //             },
 * //             AwsEventSchemasRegistry: { // AwsEventSchemasRegistryDetails
 * //               Description: "STRING_VALUE",
 * //               RegistryArn: "STRING_VALUE",
 * //               RegistryName: "STRING_VALUE",
 * //             },
 * //             AwsGuardDutyDetector: { // AwsGuardDutyDetectorDetails
 * //               DataSources: { // AwsGuardDutyDetectorDataSourcesDetails
 * //                 CloudTrail: { // AwsGuardDutyDetectorDataSourcesCloudTrailDetails
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //                 DnsLogs: { // AwsGuardDutyDetectorDataSourcesDnsLogsDetails
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //                 FlowLogs: { // AwsGuardDutyDetectorDataSourcesFlowLogsDetails
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //                 Kubernetes: { // AwsGuardDutyDetectorDataSourcesKubernetesDetails
 * //                   AuditLogs: { // AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails
 * //                     Status: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 MalwareProtection: { // AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails
 * //                   ScanEc2InstanceWithFindings: { // AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails
 * //                     EbsVolumes: { // AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails
 * //                       Reason: "STRING_VALUE",
 * //                       Status: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   ServiceRole: "STRING_VALUE",
 * //                 },
 * //                 S3Logs: { // AwsGuardDutyDetectorDataSourcesS3LogsDetails
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               },
 * //               Features: [ // AwsGuardDutyDetectorFeaturesList
 * //                 { // AwsGuardDutyDetectorFeaturesDetails
 * //                   Name: "STRING_VALUE",
 * //                   Status: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               FindingPublishingFrequency: "STRING_VALUE",
 * //               ServiceRole: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //             },
 * //             AwsStepFunctionStateMachine: { // AwsStepFunctionStateMachineDetails
 * //               Label: "STRING_VALUE",
 * //               LoggingConfiguration: { // AwsStepFunctionStateMachineLoggingConfigurationDetails
 * //                 Destinations: [ // AwsStepFunctionStateMachineLoggingConfigurationDestinationsList
 * //                   { // AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails
 * //                     CloudWatchLogsLogGroup: { // AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails
 * //                       LogGroupArn: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 IncludeExecutionData: true || false,
 * //                 Level: "STRING_VALUE",
 * //               },
 * //               Name: "STRING_VALUE",
 * //               RoleArn: "STRING_VALUE",
 * //               StateMachineArn: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               TracingConfiguration: { // AwsStepFunctionStateMachineTracingConfigurationDetails
 * //                 Enabled: true || false,
 * //               },
 * //               Type: "STRING_VALUE",
 * //             },
 * //             AwsAthenaWorkGroup: { // AwsAthenaWorkGroupDetails
 * //               Name: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               Configuration: { // AwsAthenaWorkGroupConfigurationDetails
 * //                 ResultConfiguration: { // AwsAthenaWorkGroupConfigurationResultConfigurationDetails
 * //                   EncryptionConfiguration: { // AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails
 * //                     EncryptionOption: "STRING_VALUE",
 * //                     KmsKey: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             AwsEventsEventbus: { // AwsEventsEventbusDetails
 * //               Arn: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               Policy: "STRING_VALUE",
 * //             },
 * //             AwsDmsEndpoint: { // AwsDmsEndpointDetails
 * //               CertificateArn: "STRING_VALUE",
 * //               DatabaseName: "STRING_VALUE",
 * //               EndpointArn: "STRING_VALUE",
 * //               EndpointIdentifier: "STRING_VALUE",
 * //               EndpointType: "STRING_VALUE",
 * //               EngineName: "STRING_VALUE",
 * //               ExternalId: "STRING_VALUE",
 * //               ExtraConnectionAttributes: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               Port: Number("int"),
 * //               ServerName: "STRING_VALUE",
 * //               SslMode: "STRING_VALUE",
 * //               Username: "STRING_VALUE",
 * //             },
 * //             AwsEventsEndpoint: { // AwsEventsEndpointDetails
 * //               Arn: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               EndpointId: "STRING_VALUE",
 * //               EndpointUrl: "STRING_VALUE",
 * //               EventBuses: [ // AwsEventsEndpointEventBusesList
 * //                 { // AwsEventsEndpointEventBusesDetails
 * //                   EventBusArn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Name: "STRING_VALUE",
 * //               ReplicationConfig: { // AwsEventsEndpointReplicationConfigDetails
 * //                 State: "STRING_VALUE",
 * //               },
 * //               RoleArn: "STRING_VALUE",
 * //               RoutingConfig: { // AwsEventsEndpointRoutingConfigDetails
 * //                 FailoverConfig: { // AwsEventsEndpointRoutingConfigFailoverConfigDetails
 * //                   Primary: { // AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails
 * //                     HealthCheck: "STRING_VALUE",
 * //                   },
 * //                   Secondary: { // AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails
 * //                     Route: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               State: "STRING_VALUE",
 * //               StateReason: "STRING_VALUE",
 * //             },
 * //             AwsDmsReplicationTask: { // AwsDmsReplicationTaskDetails
 * //               CdcStartPosition: "STRING_VALUE",
 * //               CdcStartTime: "STRING_VALUE",
 * //               CdcStopPosition: "STRING_VALUE",
 * //               MigrationType: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               ResourceIdentifier: "STRING_VALUE",
 * //               ReplicationInstanceArn: "STRING_VALUE",
 * //               ReplicationTaskIdentifier: "STRING_VALUE",
 * //               ReplicationTaskSettings: "STRING_VALUE",
 * //               SourceEndpointArn: "STRING_VALUE",
 * //               TableMappings: "STRING_VALUE",
 * //               TargetEndpointArn: "STRING_VALUE",
 * //               TaskData: "STRING_VALUE",
 * //             },
 * //             AwsDmsReplicationInstance: { // AwsDmsReplicationInstanceDetails
 * //               AllocatedStorage: Number("int"),
 * //               AutoMinorVersionUpgrade: true || false,
 * //               AvailabilityZone: "STRING_VALUE",
 * //               EngineVersion: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               MultiAZ: true || false,
 * //               PreferredMaintenanceWindow: "STRING_VALUE",
 * //               PubliclyAccessible: true || false,
 * //               ReplicationInstanceClass: "STRING_VALUE",
 * //               ReplicationInstanceIdentifier: "STRING_VALUE",
 * //               ReplicationSubnetGroup: { // AwsDmsReplicationInstanceReplicationSubnetGroupDetails
 * //                 ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //               },
 * //               VpcSecurityGroups: [ // AwsDmsReplicationInstanceVpcSecurityGroupsList
 * //                 { // AwsDmsReplicationInstanceVpcSecurityGroupsDetails
 * //                   VpcSecurityGroupId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AwsRoute53HostedZone: { // AwsRoute53HostedZoneDetails
 * //               HostedZone: { // AwsRoute53HostedZoneObjectDetails
 * //                 Id: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //                 Config: { // AwsRoute53HostedZoneConfigDetails
 * //                   Comment: "STRING_VALUE",
 * //                 },
 * //               },
 * //               Vpcs: [ // AwsRoute53HostedZoneVpcsList
 * //                 { // AwsRoute53HostedZoneVpcDetails
 * //                   Id: "STRING_VALUE",
 * //                   Region: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               NameServers: [ // AwsRoute53HostedZoneNameServersList
 * //                 "STRING_VALUE",
 * //               ],
 * //               QueryLoggingConfig: { // AwsRoute53QueryLoggingConfigDetails
 * //                 CloudWatchLogsLogGroupArn: { // CloudWatchLogsLogGroupArnConfigDetails
 * //                   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //                   HostedZoneId: "STRING_VALUE",
 * //                   Id: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             AwsMskCluster: { // AwsMskClusterDetails
 * //               ClusterInfo: { // AwsMskClusterClusterInfoDetails
 * //                 EncryptionInfo: { // AwsMskClusterClusterInfoEncryptionInfoDetails
 * //                   EncryptionInTransit: { // AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails
 * //                     InCluster: true || false,
 * //                     ClientBroker: "STRING_VALUE",
 * //                   },
 * //                   EncryptionAtRest: { // AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails
 * //                     DataVolumeKMSKeyId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 CurrentVersion: "STRING_VALUE",
 * //                 NumberOfBrokerNodes: Number("int"),
 * //                 ClusterName: "STRING_VALUE",
 * //                 ClientAuthentication: { // AwsMskClusterClusterInfoClientAuthenticationDetails
 * //                   Sasl: { // AwsMskClusterClusterInfoClientAuthenticationSaslDetails
 * //                     Iam: { // AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails
 * //                       Enabled: true || false,
 * //                     },
 * //                     Scram: { // AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails
 * //                       Enabled: true || false,
 * //                     },
 * //                   },
 * //                   Unauthenticated: { // AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails
 * //                     Enabled: true || false,
 * //                   },
 * //                   Tls: { // AwsMskClusterClusterInfoClientAuthenticationTlsDetails
 * //                     CertificateAuthorityArnList: "<StringList>",
 * //                     Enabled: true || false,
 * //                   },
 * //                 },
 * //                 EnhancedMonitoring: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsS3AccessPoint: { // AwsS3AccessPointDetails
 * //               AccessPointArn: "STRING_VALUE",
 * //               Alias: "STRING_VALUE",
 * //               Bucket: "STRING_VALUE",
 * //               BucketAccountId: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               NetworkOrigin: "STRING_VALUE",
 * //               PublicAccessBlockConfiguration: {
 * //                 BlockPublicAcls: true || false,
 * //                 BlockPublicPolicy: true || false,
 * //                 IgnorePublicAcls: true || false,
 * //                 RestrictPublicBuckets: true || false,
 * //               },
 * //               VpcConfiguration: { // AwsS3AccessPointVpcConfigurationDetails
 * //                 VpcId: "STRING_VALUE",
 * //               },
 * //             },
 * //             AwsEc2ClientVpnEndpoint: { // AwsEc2ClientVpnEndpointDetails
 * //               ClientVpnEndpointId: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               ClientCidrBlock: "STRING_VALUE",
 * //               DnsServer: "<StringList>",
 * //               SplitTunnel: true || false,
 * //               TransportProtocol: "STRING_VALUE",
 * //               VpnPort: Number("int"),
 * //               ServerCertificateArn: "STRING_VALUE",
 * //               AuthenticationOptions: [ // AwsEc2ClientVpnEndpointAuthenticationOptionsList
 * //                 { // AwsEc2ClientVpnEndpointAuthenticationOptionsDetails
 * //                   Type: "STRING_VALUE",
 * //                   ActiveDirectory: { // AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails
 * //                     DirectoryId: "STRING_VALUE",
 * //                   },
 * //                   MutualAuthentication: { // AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails
 * //                     ClientRootCertificateChain: "STRING_VALUE",
 * //                   },
 * //                   FederatedAuthentication: { // AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails
 * //                     SamlProviderArn: "STRING_VALUE",
 * //                     SelfServiceSamlProviderArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               ConnectionLogOptions: { // AwsEc2ClientVpnEndpointConnectionLogOptionsDetails
 * //                 Enabled: true || false,
 * //                 CloudwatchLogGroup: "STRING_VALUE",
 * //                 CloudwatchLogStream: "STRING_VALUE",
 * //               },
 * //               SecurityGroupIdSet: "<StringList>",
 * //               VpcId: "STRING_VALUE",
 * //               SelfServicePortalUrl: "STRING_VALUE",
 * //               ClientConnectOptions: { // AwsEc2ClientVpnEndpointClientConnectOptionsDetails
 * //                 Enabled: true || false,
 * //                 LambdaFunctionArn: "STRING_VALUE",
 * //                 Status: { // AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails
 * //                   Code: "STRING_VALUE",
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //               },
 * //               SessionTimeoutHours: Number("int"),
 * //               ClientLoginBannerOptions: { // AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails
 * //                 Enabled: true || false,
 * //                 BannerText: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           ApplicationName: "STRING_VALUE",
 * //           ApplicationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Compliance: { // Compliance
 * //         Status: "PASSED" || "WARNING" || "FAILED" || "NOT_AVAILABLE",
 * //         RelatedRequirements: [ // RelatedRequirementsList
 * //           "STRING_VALUE",
 * //         ],
 * //         StatusReasons: [ // StatusReasonsList
 * //           { // StatusReason
 * //             ReasonCode: "STRING_VALUE", // required
 * //             Description: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SecurityControlId: "STRING_VALUE",
 * //         AssociatedStandards: [ // AssociatedStandardsList
 * //           { // AssociatedStandard
 * //             StandardsId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SecurityControlParameters: [ // SecurityControlParametersList
 * //           { // SecurityControlParameter
 * //             Name: "STRING_VALUE",
 * //             Value: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 * //       WorkflowState: "NEW" || "ASSIGNED" || "IN_PROGRESS" || "DEFERRED" || "RESOLVED",
 * //       Workflow: { // Workflow
 * //         Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 * //       },
 * //       RecordState: "ACTIVE" || "ARCHIVED",
 * //       RelatedFindings: [ // RelatedFindingList
 * //         { // RelatedFinding
 * //           ProductArn: "STRING_VALUE", // required
 * //           Id: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Note: { // Note
 * //         Text: "STRING_VALUE", // required
 * //         UpdatedBy: "STRING_VALUE", // required
 * //         UpdatedAt: "STRING_VALUE", // required
 * //       },
 * //       Vulnerabilities: [ // VulnerabilityList
 * //         { // Vulnerability
 * //           Id: "STRING_VALUE", // required
 * //           VulnerablePackages: [ // SoftwarePackageList
 * //             { // SoftwarePackage
 * //               Name: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //               Epoch: "STRING_VALUE",
 * //               Release: "STRING_VALUE",
 * //               Architecture: "STRING_VALUE",
 * //               PackageManager: "STRING_VALUE",
 * //               FilePath: "STRING_VALUE",
 * //               FixedInVersion: "STRING_VALUE",
 * //               Remediation: "STRING_VALUE",
 * //               SourceLayerHash: "STRING_VALUE",
 * //               SourceLayerArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Cvss: [ // CvssList
 * //             { // Cvss
 * //               Version: "STRING_VALUE",
 * //               BaseScore: Number("double"),
 * //               BaseVector: "STRING_VALUE",
 * //               Source: "STRING_VALUE",
 * //               Adjustments: [ // AdjustmentList
 * //                 { // Adjustment
 * //                   Metric: "STRING_VALUE",
 * //                   Reason: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           RelatedVulnerabilities: "<StringList>",
 * //           Vendor: { // VulnerabilityVendor
 * //             Name: "STRING_VALUE", // required
 * //             Url: "STRING_VALUE",
 * //             VendorSeverity: "STRING_VALUE",
 * //             VendorCreatedAt: "STRING_VALUE",
 * //             VendorUpdatedAt: "STRING_VALUE",
 * //           },
 * //           ReferenceUrls: "<StringList>",
 * //           FixAvailable: "YES" || "NO" || "PARTIAL",
 * //           EpssScore: Number("double"),
 * //           ExploitAvailable: "YES" || "NO",
 * //           CodeVulnerabilities: [ // VulnerabilityCodeVulnerabilitiesList
 * //             { // VulnerabilityCodeVulnerabilities
 * //               Cwes: "<TypeList>",
 * //               FilePath: { // CodeVulnerabilitiesFilePath
 * //                 EndLine: Number("int"),
 * //                 FileName: "STRING_VALUE",
 * //                 FilePath: "STRING_VALUE",
 * //                 StartLine: Number("int"),
 * //               },
 * //               SourceArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       PatchSummary: { // PatchSummary
 * //         Id: "STRING_VALUE", // required
 * //         InstalledCount: Number("int"),
 * //         MissingCount: Number("int"),
 * //         FailedCount: Number("int"),
 * //         InstalledOtherCount: Number("int"),
 * //         InstalledRejectedCount: Number("int"),
 * //         InstalledPendingReboot: Number("int"),
 * //         OperationStartTime: "STRING_VALUE",
 * //         OperationEndTime: "STRING_VALUE",
 * //         RebootOption: "STRING_VALUE",
 * //         Operation: "STRING_VALUE",
 * //       },
 * //       Action: { // Action
 * //         ActionType: "STRING_VALUE",
 * //         NetworkConnectionAction: { // NetworkConnectionAction
 * //           ConnectionDirection: "STRING_VALUE",
 * //           RemoteIpDetails: { // ActionRemoteIpDetails
 * //             IpAddressV4: "STRING_VALUE",
 * //             Organization: { // IpOrganizationDetails
 * //               Asn: Number("int"),
 * //               AsnOrg: "STRING_VALUE",
 * //               Isp: "STRING_VALUE",
 * //               Org: "STRING_VALUE",
 * //             },
 * //             Country: { // Country
 * //               CountryCode: "STRING_VALUE",
 * //               CountryName: "STRING_VALUE",
 * //             },
 * //             City: { // City
 * //               CityName: "STRING_VALUE",
 * //             },
 * //             GeoLocation: { // GeoLocation
 * //               Lon: Number("double"),
 * //               Lat: Number("double"),
 * //             },
 * //           },
 * //           RemotePortDetails: { // ActionRemotePortDetails
 * //             Port: Number("int"),
 * //             PortName: "STRING_VALUE",
 * //           },
 * //           LocalPortDetails: { // ActionLocalPortDetails
 * //             Port: Number("int"),
 * //             PortName: "STRING_VALUE",
 * //           },
 * //           Protocol: "STRING_VALUE",
 * //           Blocked: true || false,
 * //         },
 * //         AwsApiCallAction: { // AwsApiCallAction
 * //           Api: "STRING_VALUE",
 * //           ServiceName: "STRING_VALUE",
 * //           CallerType: "STRING_VALUE",
 * //           RemoteIpDetails: {
 * //             IpAddressV4: "STRING_VALUE",
 * //             Organization: {
 * //               Asn: Number("int"),
 * //               AsnOrg: "STRING_VALUE",
 * //               Isp: "STRING_VALUE",
 * //               Org: "STRING_VALUE",
 * //             },
 * //             Country: {
 * //               CountryCode: "STRING_VALUE",
 * //               CountryName: "STRING_VALUE",
 * //             },
 * //             City: {
 * //               CityName: "STRING_VALUE",
 * //             },
 * //             GeoLocation: {
 * //               Lon: Number("double"),
 * //               Lat: Number("double"),
 * //             },
 * //           },
 * //           DomainDetails: { // AwsApiCallActionDomainDetails
 * //             Domain: "STRING_VALUE",
 * //           },
 * //           AffectedResources: "<FieldMap>",
 * //           FirstSeen: "STRING_VALUE",
 * //           LastSeen: "STRING_VALUE",
 * //         },
 * //         DnsRequestAction: { // DnsRequestAction
 * //           Domain: "STRING_VALUE",
 * //           Protocol: "STRING_VALUE",
 * //           Blocked: true || false,
 * //         },
 * //         PortProbeAction: { // PortProbeAction
 * //           PortProbeDetails: [ // PortProbeDetailList
 * //             { // PortProbeDetail
 * //               LocalPortDetails: {
 * //                 Port: Number("int"),
 * //                 PortName: "STRING_VALUE",
 * //               },
 * //               LocalIpDetails: { // ActionLocalIpDetails
 * //                 IpAddressV4: "STRING_VALUE",
 * //               },
 * //               RemoteIpDetails: {
 * //                 IpAddressV4: "STRING_VALUE",
 * //                 Organization: {
 * //                   Asn: Number("int"),
 * //                   AsnOrg: "STRING_VALUE",
 * //                   Isp: "STRING_VALUE",
 * //                   Org: "STRING_VALUE",
 * //                 },
 * //                 Country: {
 * //                   CountryCode: "STRING_VALUE",
 * //                   CountryName: "STRING_VALUE",
 * //                 },
 * //                 City: {
 * //                   CityName: "STRING_VALUE",
 * //                 },
 * //                 GeoLocation: {
 * //                   Lon: Number("double"),
 * //                   Lat: Number("double"),
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           Blocked: true || false,
 * //         },
 * //       },
 * //       FindingProviderFields: { // FindingProviderFields
 * //         Confidence: Number("int"),
 * //         Criticality: Number("int"),
 * //         RelatedFindings: [
 * //           {
 * //             ProductArn: "STRING_VALUE", // required
 * //             Id: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Severity: { // FindingProviderSeverity
 * //           Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //           Original: "STRING_VALUE",
 * //         },
 * //         Types: "<TypeList>",
 * //       },
 * //       Sample: true || false,
 * //       GeneratorDetails: { // GeneratorDetails
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Labels: "<TypeList>",
 * //       },
 * //       ProcessedAt: "STRING_VALUE",
 * //       AwsAccountName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingsCommandInput - {@link GetFindingsCommandInput}
 * @returns {@link GetFindingsCommandOutput}
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get a list of findings
 * ```javascript
 * // The following example returns a filtered and sorted list of Security Hub findings.
 * const input = {
 *   "Filters": {
 *     "AwsAccountId": [
 *       {
 *         "Comparison": "PREFIX",
 *         "Value": "123456789012"
 *       }
 *     ]
 *   },
 *   "MaxResults": 1
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Findings": [
 *     {
 *       "AwsAccountId": "123456789012",
 *       "CompanyName": "AWS",
 *       "Compliance": {
 *         "AssociatedStandards": [
 *           {
 *             "StandardsId": "standards/aws-foundational-security-best-practices/v/1.0.0"
 *           },
 *           {
 *             "StandardsId": "standards/pci-dss/v/3.2.1"
 *           },
 *           {
 *             "StandardsId": "ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *           },
 *           {
 *             "StandardsId": "standards/cis-aws-foundations-benchmark/v/1.4.0"
 *           },
 *           {
 *             "StandardsId": "standards/service-managed-aws-control-tower/v/1.0.0"
 *           }
 *         ],
 *         "RelatedRequirements": [
 *           "PCI DSS v3.2.1/3.4",
 *           "CIS AWS Foundations Benchmark v1.2.0/2.7",
 *           "CIS AWS Foundations Benchmark v1.4.0/3.7"
 *         ],
 *         "SecurityControlId": "CloudTrail.2",
 *         "Status": "FAILED"
 *       },
 *       "CreatedAt": "2022-10-06T02:18:23.076Z",
 *       "Description": "This AWS control checks whether AWS CloudTrail is configured to use the server side encryption (SSE) AWS Key Management Service (AWS KMS) customer master key (CMK) encryption. The check will pass if the KmsKeyId is defined.",
 *       "FindingProviderFields": {
 *         "Severity": {
 *           "Label": "MEDIUM",
 *           "Original": "MEDIUM"
 *         },
 *         "Types": [
 *           "Software and Configuration Checks/Industry and Regulatory Standards"
 *         ]
 *       },
 *       "FirstObservedAt": "2022-10-06T02:18:23.076Z",
 *       "GeneratorId": "security-control/CloudTrail.2",
 *       "Id": "arn:aws:securityhub:us-east-2:123456789012:security-control/CloudTrail.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "LastObservedAt": "2022-10-28T16:10:06.956Z",
 *       "ProductArn": "arn:aws:securityhub:us-east-2::product/aws/securityhub",
 *       "ProductFields": {
 *         "RelatedAWSResources:0/name": "securityhub-cloud-trail-encryption-enabled-fe95bf3f",
 *         "RelatedAWSResources:0/type": "AWS::Config::ConfigRule",
 *         "Resources:0/Id": "arn:aws:cloudtrail:us-east-2:123456789012:trail/AWSMacieTrail-DO-NOT-EDIT",
 *         "aws/securityhub/CompanyName": "AWS",
 *         "aws/securityhub/FindingId": "arn:aws:securityhub:us-east-2::product/aws/securityhub/arn:aws:securityhub:us-east-2:123456789012:security-control/CloudTrail.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *         "aws/securityhub/ProductName": "Security Hub"
 *       },
 *       "ProductName": "Security Hub",
 *       "RecordState": "ACTIVE",
 *       "Region": "us-east-2",
 *       "Remediation": {
 *         "Recommendation": {
 *           "Text": "For directions on how to correct this issue, consult the AWS Security Hub controls documentation.",
 *           "Url": "https://docs.aws.amazon.com/console/securityhub/CloudTrail.2/remediation"
 *         }
 *       },
 *       "Resources": [
 *         {
 *           "Id": "arn:aws:cloudtrail:us-east-2:123456789012:trail/AWSMacieTrail-DO-NOT-EDIT",
 *           "Partition": "aws",
 *           "Region": "us-east-2",
 *           "Type": "AwsCloudTrailTrail"
 *         }
 *       ],
 *       "SchemaVersion": "2018-10-08",
 *       "Severity": {
 *         "Label": "MEDIUM",
 *         "Normalized": 40,
 *         "Original": "MEDIUM"
 *       },
 *       "Title": "CloudTrail should have encryption at-rest enabled",
 *       "Types": [
 *         "Software and Configuration Checks/Industry and Regulatory Standards"
 *       ],
 *       "UpdatedAt": "2022-10-28T16:10:00.093Z",
 *       "Workflow": {
 *         "Status": "NEW"
 *       },
 *       "WorkflowState": "NEW"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-findings-1677181069931
 * ```
 *
 */
export class GetFindingsCommand extends $Command<
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetFindingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsCommandInput, GetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetFindings",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsCommandOutput> {
    return de_GetFindingsCommand(output, context);
  }
}
