@preprocessor typescript

program -> statement:+
statement -> assignment | display
assignment -> "set" identifier "to" expression
display -> "display" expression
expression -> number | string | identifier
identifier -> [a-zA-Z_][a-zA-Z0-9_]* {% id => id.join("") %}
number -> [0-9]+ {% digits => parseInt(digits.join("")) %}
string -> "\"" [^"]* "\"" {% ([_, value]) => value %}
