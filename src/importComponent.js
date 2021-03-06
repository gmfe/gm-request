import React from 'react'

class ImportCom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentWillMount () {
    const {__load, __options} = this.props

    this.setState({
      Component: null
    })

    __load().then(m => {
      this.setState({
        Component: m.default
      }, () => {
        if (__options.onLoad) {
          __options.onLoad()
        }
      })
    })
  }

  render () {
    const {
            __load, __options, // eslint-disable-line
      ...rest
    } = this.props
    const {Component} = this.state
    return Component ? <Component {...rest} /> : null
  }
}

const importComponent = (load, options = {}) => {
  console.warn('importComponent is deprecated. Use react-loadable instead.')
  return (props) => {
    return <ImportCom {...props} __load={load} __options={options} />
  }
}

export default importComponent
