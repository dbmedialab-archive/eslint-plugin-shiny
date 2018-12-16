/**
 * @fileoverview Disallows to use index imports from shiny.
 * @author Sergey
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var shinyIndexSource = '@aller/shiny';

module.exports = {
    meta: {
        docs: {
            description: "Disallows to use index imports from shiny.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Returns the name of the module imported or re-exported.
         *
         * @param {ASTNode} node - A node to get.
         * @returns {string} the name of the module, or empty string if no name.
         */
        function getValue(node) {
            if (node && node.source && node.source.value) {
                return node.source.value.trim();
            }

            return "";
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            "ImportDeclaration": function(node) {
                const value = getValue(node);
                if (value === shinyIndexSource)
                    context.report({
                        node: node,
                        message: "Index imports from shiny are not allowed.",
                    })
            }

        };
    }
};
