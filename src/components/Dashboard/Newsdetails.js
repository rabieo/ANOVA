import React from 'react'

const Newsdetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section News-details">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title">News title - {id}</span>
                    <p>Lorem dasdas fdgdfg sdfdg  fdgdfg dgdf gdf gdfg fdgdfgdg dfh hjghjujjk ghjfg fd gfs sdfsdgfhghfghf fg hfg hfg hfg hgfhgfh gfh</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ahmed</div>
                    <div>12 Aug, 6:15pm</div>
                </div>
            </div>

        </div>
    )
}

export default Newsdetails