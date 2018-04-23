import React from 'react'

export default class Password extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      canBeSend: false,
      status: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    alert(`Envoi de votre mot de passe top secret : ${this.state.value}`)
  }

  handleChange (event) {
    let value = event.target.value.trim()
    this.setState({
      value: value
    })
    console.log(value)
    let valueLength = value.length

    // regex for special character
    let specialCharacter = new RegExp(/\W+/, 'i')
    if (valueLength < 6 || value === value.toLowerCase()) {
      this.setState({
        status: 'mot de passe faible'
      })
    } else {
      if (specialCharacter.test(value)) {
        this.setState({
          status: 'mot de passe fort',
          canBeSend: true
        })
      } else {
        this.setState({
          status: 'mot de passe moyen',
          canBeSend: true
        })
      }
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Password :
        </label>
        <input type='password' onKeyUp={this.handleChange.bind(this)} />
        <p>{this.state.status}</p>
        {this.state.canBeSend &&
        <button type='submit'>
        Envoyer
        </button>
        }
      </form>
    )
  }
}
