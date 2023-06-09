import React from 'react'
import Slider from './Slider';
import CardItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div>
        <Slider/>
        <div id="text_about"><a name="about"></a>
          <p>Эко-комплекс «Кубез» — это живописный уголок в Сибири, который способен приятно удивить и порадовать абсолютно любого приезжего, вне зависимости от типа отдыха, который вы предпочитаете.</p>
          <p>Наш эко-комплекс расположен в окружении хвойных лесов у подножья горы Кубез Салаирского кряжа. Его удобное местоположение: 120 километров от Кемерова и 130 — от Новосибирска привлекает сюда огромное количество отдыхающих.</p>
          <p>Мы предлагаем туры на любой вкус и возможности. Основные направления:
            <li>Хайкинг. Это легкий непродолжительный поход с оздоровительными и познавательными целями по пересеченной местности. Здесь не нужна специальная подготовка, достаточно иметь тягу к новым впечатлениям, желание побыть наедине в природой и хорошо себя чувствовать физически.</li>
            <li>Конные прогулки. Программа для любителей разнообразия и активного отдыха. Вас ожидают живописные метса, малоизученные территории и близкое общения с умными и добрыми животными. </li>
          </p>
          </div>
          <a name="tyrs"></a>
        <CardItem item={props.item}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}/>
        
    </div>
    
  )
}

export default Home