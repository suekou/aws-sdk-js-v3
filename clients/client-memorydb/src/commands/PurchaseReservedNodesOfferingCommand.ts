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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import {
  PurchaseReservedNodesOfferingRequest,
  PurchaseReservedNodesOfferingRequestFilterSensitiveLog,
  PurchaseReservedNodesOfferingResponse,
  PurchaseReservedNodesOfferingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PurchaseReservedNodesOfferingCommand,
  serializeAws_json1_1PurchaseReservedNodesOfferingCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandInput extends PurchaseReservedNodesOfferingRequest {}
/**
 * The output of {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandOutput
  extends PurchaseReservedNodesOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase a reserved  node offering. Reserved nodes are not eligible for cancellation and are non-refundable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, PurchaseReservedNodesOfferingCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, PurchaseReservedNodesOfferingCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new PurchaseReservedNodesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 */
export class PurchaseReservedNodesOfferingCommand extends $Command<
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
  MemoryDBClientResolvedConfig
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

  constructor(readonly input: PurchaseReservedNodesOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedNodesOfferingCommandInput, PurchaseReservedNodesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedNodesOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "PurchaseReservedNodesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedNodesOfferingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedNodesOfferingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseReservedNodesOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PurchaseReservedNodesOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedNodesOfferingCommandOutput> {
    return deserializeAws_json1_1PurchaseReservedNodesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
