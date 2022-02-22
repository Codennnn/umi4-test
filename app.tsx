import { createElement } from 'react'

function Foo(props: any) {
  return <div>{props.children}</div>
}

export function rootContainer(container: any, opts: any) {
  return createElement(Foo, opts, container)
}

export function innerProvider(container: any) {
  return createElement(Foo, { title: 'innerProvider' }, container)
}

export function i18nProvider(container: any) {
  return createElement(Foo, { title: 'i18nProvider' }, container)
}

export function dataflowProvider(container: any) {
  return createElement(Foo, { title: 'dataflowProvider' }, container)
}

export function outerProvider(container: any) {
  return createElement(Foo, { title: 'outerProvider' }, container)
}
