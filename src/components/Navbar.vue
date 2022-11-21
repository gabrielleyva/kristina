<script>
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
};
</script>

<template>
    <div class="nav-menu">
        <nav>
            <div class="menu-icon" @click="showMenu()">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/>
                </svg>
            </div>
            <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <div class="initials">Kristina Ayanian</div>
                <RouterLink class="nav-item" to="/">Home</RouterLink>
                <RouterLink class="nav-item" to="/myStory">My Story</RouterLink>
                <RouterLink class="nav-item" to="/gallery">Gallery</RouterLink>
                <RouterLink class="nav-item" to="/philanthropy">Philanthropy</RouterLink>
                <RouterLink class="nav-item" to="/press">Press</RouterLink>
                <RouterLink class="nav-item" to="/contact">Contact</RouterLink>
            </div>
        </nav>
    </div>
</template>

<style>
/**
Header Styles
*/
.nav-menu nav {
    padding: 16px;
    font-size: 12px;
    text-align: left;
    background-color: var(--header-background-color);
}

.nav-menu nav a {
    padding: 0 16px;
    border-left: 1px solid var(--divider-color);
}

.closed-menu {
    opacity: 1;
}

.open-menu {
    opacity: 1;
}

.initials {
    display: inline;
    padding: 0 8px;
    font-family: santorini;
    font-weight: bolder;
}

.menu-icon {
    display: none;
}

@media screen and (max-width: 768px) {

    .menu-icon {
        display: block;
        width: 40px;
        height: 40px;
    }

    .menu-icon svg {
        fill: var(--icon-color);
    }


    .nav-menu nav {
        padding: 10px;
        display: block;
    }

    .nav-menu nav a {
        /* padding: 0 16px; */
        border-left: 1px solid var(--divider-color);
    }

    .open-menu {
        opacity: 1;
        padding: 16px;
    }

    .nav-item {
        display: block;
        margin: 16px;
    }

    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }

    .nav-items {
        flex-direction: column;
    }
}
</style>