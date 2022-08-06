import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function RightContent() {
    return (<div className="right-content">
        <ul className="right-list">
            <li>
                <div className="notification dropdown">
                    <FontAwesomeIcon icon="fas fa-bell" />
                    <span className="count">1</span>
                    <div className="dropdown__menu">
                        <ul className="list">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon="fas fa-bell" />
                                    FESTIVAL TRAVEL
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" className="sign-in" data-toggle="modal" data-target="#login">
                    <FontAwesomeIcon icon="fas fa-user" /> Sign In

                </a>
            </li>
        </ul>
    </div>);
}

export default RightContent;