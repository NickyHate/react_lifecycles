import React from "react";

export default class LifecycleComponent extends React.Component {

    //1. Initialization, Устанавливаем пропсы и начальный state компоненту в конструкторе
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Press"};
        this.press = this.press.bind(this)

        console.log("Constructor")
    }
    //2. Mounting, Монтируем компонент в DOM (componentWillMount - deprecated)
    // DidMount - вызывается после монтирования компонента в DOM, вызывается 1 раз
    componentDidMount() {
        console.log("componentDidMount()")
    }

    //3. Updating, Когда данные компонента state и props обновятся в ответ на пользовательские события, будет вызван повторный рендер
    // ShouldUpdate - определяет должен ли компонент обновляться, по умолчанию возвращает true
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()")
        return true;
    }
    // DidUpdate - вызывается сразу же после повторного рендеринга компонента
    componentDidUpdate(){
        console.log("componentDidUpdate()")
    }

    //4. Unmounting, размонтирование (удаление) компонента из DOM дерева
    // WillUnmount - вызывается непосредственно перед размонтированием (удалением) компонента
    componentWillUnmount() {
    }

    press(){
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }
    render() {
        console.log("render()")
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}