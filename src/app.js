console.log('grokonez.com');
 
// JSX
const site = {
    title: 'Java Sample Approach',
    description: 'Java/Javascript Technology - Spring Framework'
};
 
function getContent(content) {
    if (content) {
        return <p>{content}</p>
    } else {
        return <p>[Under Construction...]</p>
    }
}
 
const template = (
    <div>
        <h2>{site.title}</h2>
        <p>{site.description}</p>
        {getContent(site.content)}
    </div>
);
 
const appRoot = document.getElementById('app');
 
ReactDOM.render(template, appRoot);