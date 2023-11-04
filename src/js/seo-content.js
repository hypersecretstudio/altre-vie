export class SeoContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <!-- Primary Meta Tags -->
      <title>Altre Vie</title>
      <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
      <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

      <meta name="keywords" content="consequatur, quia, dolore">
      <meta name="robots" content="index, follow">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-16">
      <meta name="language" content="Italian">
      <meta name="author" content="Arianna Smaron, Andrea Zaccuri, Yann Martins">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
      <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
      <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
      <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
    `;
  }
}
