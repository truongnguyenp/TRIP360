import './breadcrumb.scss';
function BreadcrumbVid({bcImg,bcTitle}) {
    return (<section className="breadcrumb">
        <div className="container-breadcrumb">
            <div className="row">
                <div className="col">
                    <div className="title">
                    {bcTitle}
                    </div>
                    <video className='bcImg' src={bcImg}/>
                </div>
            </div>
        </div>
    </section>);
}

export default BreadcrumbVid;