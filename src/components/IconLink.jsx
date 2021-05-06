import {Icon} from 'semantic-ui-react';

function LinkPiece(props) {
    const {href, name} = props;
    return (
        <a href={href} target="_blank"><Icon link name ={name} /></a>
    )
}
export default () => (
    <div className="social-media-icons">
        <LinkPiece href="facebook.com" name='facebook square' />
        <LinkPiece href="spotify.com" name='spotify' />
    </div>
)