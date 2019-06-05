# Resilient Form Example

A technique for writing forms which allow for saving progress
locally. If the network loses connection and the form is
submitted, the form will save its state locally as well. This
means that users can continue filling out a form and not worry
if they lose connection.

This example uses:

* Preact as the frontend
* Informed as a form controller
* `idb--keyval` for storing key/values to IndexedDb
* Emotion + Styled System (Babel plugin)
