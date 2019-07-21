const path = require('path')

  // Асинхронная функция
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    // путь к шаблону
  const vodkaTemplate = path.resolve(`./src/templates/vpage.js`)
    // Тянем текущий маршрут из GraphQl
    // И Promise возвращаем результат
  const result = await graphql(`
    query {
      allContentfulVodkaItems {
        edges {
          node {
            pagepath
          }
        }
      }
    }
  `)
  console.log(result.data.allContentfulVodkaItems);
  
  result.data.allContentfulVodkaItems.edges.forEach(item => {
      // Path: абсолютный путь к странице
      // Component: Нахождение шаблона
      // Context: Объект с содержанием
    createPage({
      path: `/vodka/${ item.node.pagepath }`,
      component: vodkaTemplate,
      context: {
        pagepath: item.node.pagepath
      }
    })
  });
  
    


}