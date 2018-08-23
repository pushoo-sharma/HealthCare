import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Link, DropdownItem, Dropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';
import './sideBar.scss';


export default class Sidebar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dropdownOpen: false,
			AdsSubMenu: false,
			shrink: null
		}
	}

	toggle = () => {
		console.log("in toggle");
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	toggleSubMenu = () => {
		this.setState({
			AdsSubMenu: !this.state.AdsSubMenu
		});
	}

	AdsSubMenu = () => {
		return (
			<Nav className={"sidebar-menu-wrap child " + this.getAnimation().cls3} vertical>
				<NavItem>
					<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
						<Media left href="#">
							<Media object src="/Icon_assets/svg/add-btn.svg" alt="sdc" />
						</Media>
						Create Ads</Link>
				</NavItem>
				<NavItem>
					<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
						<Media left href="#">
							<Media object src="/Icon_assets/svg/group-13.svg" alt="sdc" />
						</Media>
						Upload Creative</Link>
				</NavItem>
				<NavItem>
					<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
						<Media left href="#">
							<Media object src="/Icon_assets/svg/group-18.svg" alt="sdc" />
						</Media>
						Creative Library</Link>
				</NavItem>
			</Nav>
		)
	}

	toggleSideBar = () => {
		this.setState({
			shrink: !this.state.shrink
		})
	}

	getAnimation = () => {
		if (this.state.shrink == null) {
			return ''
		} else if (!this.state.shrink) {
			return { cls: 'expand', cls2: '', cls3: '', cls4: '' }
		} else {
			return { cls: 'shrink', cls2: 'collapsed', cls3: 'collapsed-child', cls4: 'rotate-btn' }
		}
	}
	getSubMenu(that) {
		{ this.state.AdsSubMenu ? this.AdsSubMenu(that) : null }

	}
	render() {
		return (
			<div className={ "sidebar-wrapper " + this.getAnimation().cls}>
				<div className={"side-nav " + this.getAnimation().cls
				}>
					{this.state.shrink ? <Media className="main-img" left href="#">
						<Media object src="/Icon_assets/svg/Help.svg" alt="sdc" />
					</Media> : <div>
							<span className="agency-name heading-5">Agency name </span>
							<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
								<DropdownToggle caret
									tag="span"
									onClick={this.toggle}
									data-toggle="dropdown"
									aria-expanded={this.state.dropdownOpen}
									id="brand-name"
									className="heading-4">
									Brandname
        </DropdownToggle>
								<DropdownMenu>
									<div onClick={this.toggle}>Custom dropdown item</div>
									<div onClick={this.toggle}>Custom dropdown item</div>
									<div onClick={this.toggle}>Custom dropdown item</div>
									<div onClick={this.toggle}>Custom dropdown item</div>
								</DropdownMenu>
							</Dropdown>
						</div>}
					<Nav className="sidebar-menu-wrap" vertical>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
								<Media left href="#">
									<Media object src="/Icon_assets/svg/overview.svg" alt="sdc" />
								</Media>
								Performance</Link>
						</NavItem>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} tag={Link} to="/dashboard">
								<Media left href="#">
									<Media object src="/Icon_assets/svg/campaigns.svg" alt="sdc" />
								</Media>
								Campaigns</Link>
						</NavItem>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
								<Media left href="#">
									<Media object src="/Icon_assets/svg/ads.svg" alt="sdc" />
								</Media>
								Adsets</Link>
						</NavItem>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#" onClick={this.toggleSubMenu}>
								<Media left href="#">
									<Media object src="/Icon_assets/svg/create-ads.svg" alt="sdc" />
								</Media>
								Ads</Link>
							{this.state.AdsSubMenu ? this.AdsSubMenu(this) : null}
						</NavItem>

					</Nav>
					<Nav className="sidebar-menu-wrap bottom" vertical>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
								<Media left href="#">
									<Media object src="/Icon_assets/svg/user.svg" alt="sdc" />
								</Media>
								<span>Smitesh D</span></Link>
						</NavItem>
						<NavItem>
							<Link className={"sidebar-menu " + this.getAnimation().cls2} to="#">
								<Media left href="#">
									<Media object src="/Icon_assets/svg/heart.svg" alt="sdc" />
								</Media>
								My Favorites</Link>
						</NavItem>
						<div className="sidebar-toggle-wrap">
							{this.state.shrink ? '' : <img src="/Icon_assets/svg/clear-demand.svg" />}
							<Media onClick={this.toggleSideBar} left href="#">
								<Media className={"sidebar-toggle-btn " + this.getAnimation().cls4} object src="/Icon_assets/svg/group-28.svg" alt="sdc22" />
							</Media>
						</div>
					</Nav>
				</div>
			</div>
		);
	}
}