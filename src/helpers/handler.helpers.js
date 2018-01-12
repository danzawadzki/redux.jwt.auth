/**
 * Handler for onChange event. Requires to bind this.
 *
 * @param e - The dom event.
 */
export function handleChange(e) {
    const {id, value} = e.target;

    this.setState({
        [id]: value
    })
};