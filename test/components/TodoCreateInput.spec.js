import chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';
import TodoCreateInput from '../../src/components/TodoCreateInput';

chai.use(spies);

function setup(newProps) {
  const props = Object.assign({
    addTodo: chai.spy()
  }, newProps);

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TodoCreateInput {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: TodoCreateInput', () => {
  it('should update text on change', () => {
    const { output, renderer } = setup();
    findWithType(output, 'input').props.onChange({ target: { value: 'Walk the dog' } });
    const updated = renderer.getRenderOutput();
    expect(findWithType(updated, 'input').props.value).to.equal('Walk the dog');
  });

  it('should add to-do on enter', () => {
    const { output, renderer, props } = setup();
    findWithType(output, 'input').props.onKeyDown({ which: 13, target: { value: 'Walk the dog' } });
    const updated = renderer.getRenderOutput();
    expect(props.addTodo).to.have.been.called.with('Walk the dog');
    expect(findWithType(updated, 'input').props.value).to.equal('');
  });
});
