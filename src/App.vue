<template>
<Layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/layout/Layout.vue";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide } from "vue";

const apolloClient = new ApolloClient({
    uri: `http://localhost:2002/graphql`,
    cache: new InMemoryCache(),
});

export default defineComponent({
    name: "App",
    components: {
        Layout,
    },
    setup() {
      provide(DefaultApolloClient, apolloClient);
    },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Montserrat", sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  cursor: initial;
}

a:active {
  color: currentColor;
}

.form {
  &__field {
    position: relative;
  }

  &__error {
    color: $danger;
    font-size: 12px;
    position: absolute;
    bottom: -18px;
    left: 2px;
  }
}

.explore__container {
  margin: 0 auto;
  max-width: 1085px;
}
</style>
