/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-component-view.html', './my-component-viewModel', 'text!./component.json', 'css!./my-component-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-component', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);