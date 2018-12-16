/**
 * @fileoverview Disallows to use index imports from shiny.
 * @author Sergey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-index-import"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-index-import", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "import { Heading } from '@aller/shiny';",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
