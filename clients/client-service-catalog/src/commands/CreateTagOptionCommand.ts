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
  CreateTagOptionInput,
  CreateTagOptionInputFilterSensitiveLog,
  CreateTagOptionOutput,
  CreateTagOptionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateTagOptionCommand,
  serializeAws_json1_1CreateTagOptionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * The input for {@link CreateTagOptionCommand}.
 */
export interface CreateTagOptionCommandInput extends CreateTagOptionInput {}
/**
 * The output of {@link CreateTagOptionCommand}.
 */
export interface CreateTagOptionCommandOutput extends CreateTagOptionOutput, __MetadataBearer {}

/**
 * <p>Creates a TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagOptionCommandInput} for command's `input` shape.
 * @see {@link CreateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class CreateTagOptionCommand extends $Command<
  CreateTagOptionCommandInput,
  CreateTagOptionCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: CreateTagOptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTagOptionCommandInput, CreateTagOptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTagOptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateTagOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTagOptionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTagOptionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTagOptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTagOptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTagOptionCommandOutput> {
    return deserializeAws_json1_1CreateTagOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
