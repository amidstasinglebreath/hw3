# hw3

Purpose:
    Generate a randomly determinied password between 8 and 128 characters,
    by default includes lowercase alphabetical letters
    potentially includes uppercase alphabetical letters, special characters, and numbers


due to current issues in string declaration, the characters: " [ \ ] { | }
are not currently included in the list of special characters

Currently combines a basic HTML/CSS content box
uses bootstrap's jumbotron, and button content in order to have page content

Generate password function and button are working, output is suitibly absurd
 - internal functions may repeat see: //F@
 - possibly turn these into functions
 - likely not unless the selection of options changes significantly, 4 is not that many.
 - possibly replace alert with a more effective/in code means of query, though bootstrap's modal is about the same


Bootstrap's Form output replaced with Alert for both functionality and aesthetic reasons
Embarrasing typo in generation function fixed
fixed upper bound from 28 to 128
made lower and upper bounds on character limits into pseudo-constants

Copy to Clipboard not yet functional