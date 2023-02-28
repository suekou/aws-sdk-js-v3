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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAuditSuppressionRequest,
  DescribeAuditSuppressionRequestFilterSensitiveLog,
  DescribeAuditSuppressionResponse,
  DescribeAuditSuppressionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1DescribeAuditSuppressionCommand,
  serializeAws_restJson1DescribeAuditSuppressionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandInput extends DescribeAuditSuppressionRequest {}
/**
 * The output of {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandOutput extends DescribeAuditSuppressionResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class DescribeAuditSuppressionCommand extends $Command<
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: DescribeAuditSuppressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAuditSuppressionCommandInput, DescribeAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditSuppressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditSuppressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAuditSuppressionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAuditSuppressionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuditSuppressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditSuppressionCommandOutput> {
    return deserializeAws_restJson1DescribeAuditSuppressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
