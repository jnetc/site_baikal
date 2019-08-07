const path = require('path')

  // Асинхронная функция
  // СОЗДАНИЕ 2х разных шаблонов для генерации страниц
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    // путь к шаблонам
  const vodkaTemplate = path.resolve(`./src/templates/vpage.js`)
  const lemonadeTemplate = path.resolve(`./src/templates/lpage.js`)
    // Тянем текущие маршруты из GraphQl
  const result = await graphql(`
    query {
      allContentfulVodkaProduct {
        edges {
          node {
            pageID
          }
        }
      }
      allContentfulLemonadeProduct {
        edges {
          node {
            pageID
          }
        }
      }
    }
  `)
    // Генерируем страницы из GraphQl для водки 
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
    // Генерируем страницы из GraphQl для лимонада 
  result.data.allContentfulLemonadeProduct.edges.forEach(item => {
      // Path: абсолютный путь к странице
      // Component: Нахождение шаблона
      // Context: ключ по которому будет искаться нужная страница
      // ВНИМАНИЕ!!!  НАЗВАНИЕ СТРАНИЦ ИЗ CONTENTFUL / ID
      // ДОЛЖНЫ СОВПАДАТЬ C KEY в context !!! 
      // иначе не будет фильтровать
    createPage({
      path: `/limsa/${ item.node.pageID }`,
      component: lemonadeTemplate,
      context: {
        pageID: item.node.pageID
      }
    })
  });
}