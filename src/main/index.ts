import express from "express";
import { buildSchema, registerEnumType } from "type-graphql";
const cors = require("cors");

import access_log from "./helper/access_log";
import { logger } from "./helper/logging";
import { ZzzzzType } from "./types";

const main = async () => {
    const app: express.Express = express();
    const router: express.Router = express.Router();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(access_log);

    const schema = await buildSchema({
        resolvers: [__dirname + "/graphql/*.resolver.ts"],
        emitSchemaFile: true,
        validate: false,
    });
    // enable Enum
    registerEnumType(ZzzzzType, {
        name: "ZzzzzType",
    });

    app.listen(3000, () => {
        logger.info("Example app listening on port 3000!");
    });
};

main().catch((error) => {
    logger.error(error, "error");
});
