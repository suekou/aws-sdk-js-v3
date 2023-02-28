// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListIAMPolicyAssignmentsForUserRequest,
  ListIAMPolicyAssignmentsForUserRequestFilterSensitiveLog,
  ListIAMPolicyAssignmentsForUserResponse,
  ListIAMPolicyAssignmentsForUserResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand,
  serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * The input for {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandInput extends ListIAMPolicyAssignmentsForUserRequest {}
/**
 * The output of {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandOutput
  extends ListIAMPolicyAssignmentsForUserResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM
 * 			policies assigned to the specified user and group or groups that the user belongs
 * 			to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListIAMPolicyAssignmentsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIAMPolicyAssignmentsForUserCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsForUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class ListIAMPolicyAssignmentsForUserCommand extends $Command<
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListIAMPolicyAssignmentsForUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIAMPolicyAssignmentsForUserCommandInput, ListIAMPolicyAssignmentsForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIAMPolicyAssignmentsForUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListIAMPolicyAssignmentsForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListIAMPolicyAssignmentsForUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
