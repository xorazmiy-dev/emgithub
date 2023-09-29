const prefix = 'https://ide.xorazmiy.dev';
function buildPlaygroundUrl(source_url, lang_id) {
    return `${prefix}?source_url=${encodeURI(source_url)}&lang_id=${lang_id}`;
}