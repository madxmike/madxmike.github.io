# Astro FontAwesome Library

## Description

This library provides the `FontAwesomeIcon` and `FontAwesomeLayer` components, which
can be used to use FontAwesome icons within your project.

## Installation

```bash
npm install astro-fontawesome
```

## Usage

```tsx
<FontAwesomeIcon icon={faStar} class="star-class" />
<FontAwesomeLayer
  icons={[
    { icon: faCircle, class: 'circle-class' },
    { icon: faMap, class: 'map-class' }
  ]}
  class="layer-class"
/>
```

## Contributing

To be filled out.

## Acknowledgements

This library was made primarily through code sourced with permission by [Gilles Marchand](https://github.com/Shiva127) in [this thread](https://github.com/FortAwesome/Font-Awesome/issues/20048#issuecomment-2343093110).
