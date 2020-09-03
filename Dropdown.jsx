/*

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage in the ExampleNav component.
  The Dropdown and DropdownItem components have some problems, and also have room for improvements.
  Please fix any obvious bugs you see with the dropdown, and explain your reasoning.
  Please then describe some improvements you would make to the dropdown, and how you would implement them.
  Consider the different contexts in which you might use this dropdown and what changes might be neccessary to make it more flexible.

  Follow up question: if we wanted to sync this dropdown selection to the server with app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included

  PS: No need to worry about CSS.

 */

import React, { PureComponent } from 'react';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // need to bind the event for it to fire properly
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    // toggle should switch between true/false values
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    // consistently us this.props for children
    const { children, label } = this.props;
    return (
      <div className="dropdown">
        {
          // formatted to have one property per line
        }
        <button
          type="button"
          data-toggle="dropdown"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          // typo
          aria-expanded={isOpen}
          onClick={this.toggle}
        >
          {label}
        </button>
        <ul
          // improper syntax for ternary operator
          className={`${isOpen ? 'dropdown-open' : 'dropdown-menu'}`}
          aria-labelledby="dropdownButton"
          role="menu"
        >
          {
            // only show children if is open
            // otherwise dropdown doesnt perform as intended
          }
          {isOpen && children}
        </ul>
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  callPatch(href) {
    // call patch here with href as new dropdown state
    //app.sync('PATCH', 'user', { dropdown_1_state: {true,false} })
    console.log('href', href);
  }

  // TODO implement me
  render() {
    const { children, href } = this.props;
    return (
      // follow convention of using li under ul
      <li role="menuitem">
        {
          //setup a link to the corresponding page
        }
        <a href={href} onClick={() => this.callPatch(href)}>
          {children}
        </a>
      </li>
    )
  }
}

export default class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
