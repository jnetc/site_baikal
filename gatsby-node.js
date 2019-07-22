const path = require('path')

  // Асинхронная функция
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    // путь к шаблону
  const vodkaTemplate = path.resolve(`./src/templates/vpage.js`)
    // Тянем текущий маршрут из GraphQl
  const result = await graphql(`
    query {
      allContentfulVodkaProduct {
        edges {
          node {
            pageID
          }
        }
      }
    }
  `)
    // Генерируем страницы из GraphQl  
  result.data.allContentfulVodkaProduct.edges.forEach(item => {
      // Path: абсолютный путь к странице
      // Component: Нахождение шаблона
      // Context: ключ по которому будет искаться нужная страница
      // ВНИМАНИЕ!!!  НАЗВАНИЕ СТРАНИЦ ИЗ CONTENTFUL / ID
      // ДОЛЖНЫ СОВПАДАТЬ C KEY в context !!! 
      // иначе не будет фильтровать
    createPage({
      path: `/vodka/${ item.node.pageID }`,
      component: vodkaTemplate,
      context: {
        pageID: item.node.pageID
      }
    })
  });
}