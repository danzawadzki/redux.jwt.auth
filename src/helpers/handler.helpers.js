/**
 * Handler for onChange event. Requires to bind this.
 *
 * @param e - The dom event.
 */
export const handleChange = e => {
    const {name, value} = e.target;

    this.setState({
        [name]: value
    })
};