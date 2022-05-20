module.exports = {
  locales: ['__default', 'en', 'de'],
  defaultLocale: '__default',
  localesToIgnore: ['__default'],
  pages: {
    '*': ['common'],
    '/': ['index']
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) => {
    import(`./translations/${locale}/${namespace}`).then((m) => console.log(m))

    return import(`./translations/${locale}/${namespace}`).then((m) => m.default);

  }
}
