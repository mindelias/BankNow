import styled from 'styled-components'

const NavWrapper = styled.div`
.w3pvt-bg {
    background: #fff;
    padding: 1.5em 2em;
    margin-right:3em;
    display: flex;
}
.ml{
    margin-left:1.5em;
}
#logo a {
    float: left;
    font-size: 1.2em;
    display: initial;
    margin: 0;
    letter-spacing: 1px;
    color: #fff;
    padding: 0px 0;
    border: none;
    font-weight: 600;
    text-transform: capitalize;
}

div#logo h1 span {
    color: #fdbd10;

    vertical-align: middle;
}

header {
    position: absolute;
    z-index: 9;
    width: 100%;
    padding: 1rem 0;
}

.toggle,
[id^=drop] {
    display: none;
}

/* Giving a background-color to the nav container. */
nav {
    margin: 0;
    padding: 0;
}

nav {
    margin: 0;
    padding: 0;
}


/* Since we'll have the "ul li" "float:left"
 * we need to add a clear after the container. */

nav:after {
    content: "";
    display: table;
    clear: both;
}

/* Removing padding, margin and "list-style" from the "ul",
 * and adding "position:reltive" */
nav ul {
    float: right;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    margin-top: 0.5em;
}

/* Positioning the navigation items inline */
nav ul li {

    display: inline-block;
    /* float: left; */
}

/* Styling the links */
nav a {
    font-weight: 400;
    color: #555;
    letter-spacing: 2px;
    font-size: 0.9em;
    position: relative;
    padding: 0.5rem;
    margin: 0px 1.1em;
}


nav ul li ul li:hover {
    background: #f8f9fa;
}

/* Background color change on Hover */
nav a:hover {
    color: #0066b2;
    background: transparent;
}

.menu li.active a {
    color: #0066b2;
}

/* Hide Dropdowns by Default
 * and giving it a position of absolute */
nav ul ul {
    display: none;
    position: absolute;
    /* has to be the same number as the "line-height" of "nav a" */
    top: 25px;
    background: #fff;
    padding: 10px;
}

ul.inner-dropdown a:hover {
    color: #333;
}

/* Display Dropdowns on Hover */
nav ul li:hover > ul {
    display: inherit;
}

/* Fisrt Tier Dropdown */
nav ul ul li {
    width: 160px;
    float: none;
    display: list-item;
    position: relative;
}

nav ul ul li a {
    color: #333;
    padding: 5px 10px;
    display: block;
}

/* Second, Third and more Tiers	
 * We move the 2nd and 3rd etc tier dropdowns to the left
 * by the amount of the width of the first tier.
*/
nav ul ul ul li {
    position: relative;
    top: -60px;
    /* has to be the same number as the "width" of "nav ul ul li" */
    left: 170px;
}


/* Change ' +' in order to change the Dropdown symbol */
li > a:only-child:after {
    content: '';
}


/* Media Queries
--------------------------------------------- */

@media all and (max-width : 992px) {

    #logo {
        display: block;
        padding: 0;
        width: 30%;
        text-align: center;
        float: left;
    }

    nav {
        margin: 0;
    }

    .w3pvt-bg {
        padding: 1em;
        display: flex;
        float: right;
        width: 65%;
        justify-content: center;
    }

    nav ul {
        width: 100%;
    }

    /* Hide the navigation menu by default */
    /* Also hide the  */
    .toggle + a,
    .menu {
        display: none;
    }

    /* Stylinf the toggle lable */
    .toggle {
        display: block;
        padding: 0.32em 4em;
        font-size: 20px;
        text-decoration: none;
        border: none;
        float: left;
        background-color: #333;
        color: #fff;
        cursor: pointer !important;
        margin: 0;
        border-radius: 4px;
        margin-right: 1em;
    }

    .menu .toggle {
        float: none;
        text-align: center;
        margin: auto;
        width: 70%;
        padding: 5px;
        font-weight: normal;
        font-size: 15px;
        letter-spacing: 1px;
        background: none;
        color: #333;
    }

    .toggle:hover {
        color: #333;
        background-color: #fff;
    }

    /* Display Dropdown when clicked on Parent Lable */
    [id^=drop]:checked + ul {
        display: block;
        background: #e9ecef;
        padding: 15px 0;
        text-align: center;
    }

    /* Change menu item's width to 100% */
    nav ul li {
        display: block;
        width: 100%;
        padding: 5px 0;
        margin: 0;
    }

    nav ul ul .toggle,
    nav ul ul a {
        padding: 0 40px;
    }

    nav ul ul ul a {
        padding: 0 80px;
    }

    nav a:hover,
    nav ul ul ul a {
        background-color: transparent;
    }

    nav ul li ul li .toggle,
    nav ul ul a,
    nav ul ul ul a {
        padding: 14px 20px;
        color: #FFF;
        font-size: 17px;
    }

    /* Hide Dropdowns by Default */
    nav ul ul {
        float: none;
        position: static;
        color: #ffffff;
        /* has to be the same number as the "line-height" of "nav a" */
    }

    /* Hide menus on hover */
    nav ul ul li:hover > ul,
    nav ul li:hover > ul {
        display: none;
    }

    /* Fisrt Tier Dropdown */
    nav ul ul li {
        display: block;
        width: 100%;
        padding: 0;
    }

    nav ul ul ul li {
        position: static;
        /* has to be the same number as the "width" of "nav ul ul li" */

    }

    nav a {
        color: #333;
    }

    nav a:hover {
        color: #333;
    }

    .menu li.active a {
        color: #333;
    }

    nav ul ul li a {
        display: inline-block;
        font-size: 15px;
    }

    ul.inner-dropdown {
        padding-bottom: 0 !important;
        padding-top: 8px !important;
    }
}

@media all and (max-width : 330px) {

    nav ul li {
        display: block;
        width: 94%;
    }

}

li.icons a {
    width: 34px;
    height: 34px;
    text-align: center;
    display: inline-block;
    font-size: 13px;
    border-radius: 50%;
    line-height: 33px;
    padding: 0;
}

li.icons a.face-bk {
    background: #3b5998;
}

li.icons a.twitter {
    background: #1da1f2;
}

li.icons a.dribble {
    background: #ea4c89;
}

/*-- // header --*/
.banner-w3-pvt-top-icons li {
    display: inline-block;
    text-shadow: 3px 1px 3px rgba(45, 45, 45, 0.38);
    font-size: 1em;
    color: #fff;
    font-weight: 400;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 3px;
}

li.icons a {
    width: 48px;
    height: 48px;
    text-align: center;
    display: inline-block;
    font-size: 1em;
    border-radius: 50%;
    line-height: 33px;
    padding: 0;
    background: transporant;
    color: #fff;
}




`
export default NavWrapper