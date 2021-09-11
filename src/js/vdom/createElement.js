export default (tagName, { attrs = {}, children = [] }) => {
    const vElement = Object.create(null)

    Object.assign(vElement, {
        tagName,
        attrs,//属性
        children
    })

    return vElement
}