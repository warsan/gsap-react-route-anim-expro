import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

export const Home = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">ДОМ</h2>
			</div>
			<p>Морковь с усиленными скидками. Обеспечить для осуществления всех удовольствий жизни, с тех пор как это было изобретено, нечто подобное никогда не отказывалось от трудах благословенных, однако самый маленький из всех, кроме как ненавидит, Он родился от deleniti в объяснении этого?</p>
			<p>Но результатом будут усилия Федерального Резерва, желание мудрого человека, которым он родился, никто здесь не обвиняет праведников, способы препятствия для нужд настоящего, и когда один из нас, а не для нас, в другое время в объяснении этого, любой из них поступает коррумпированным! Это, они бросили генерал, раскроется в самом законе.</p>
		</div>
	</div>
</Transition>;
/**/
export const Expro = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">ЭКСПРОМТ</h2>
			</div>
			<p>
      Мысль надуло, - значит, "ветер перемен",<br/>
      Всё логично, если "parent" - тоже "men",<br/>
      Где-то там, за рубежами, свой "доме́н",<br/>
      Прибирал к рукам счастливый бизнесмен.<br/>
      <br/>
      Здесь - мой дом и до́мен мой - не на ветру,<br/>
      - Всем привет!... (к сему, "собака-точка-ру")</p>
		</div>
	</div>
</Transition>;

export const Services = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">УСЛУГИ</h2>
			</div>
			<p>Морковь с усиленными скидками. В других случаях отказано тому, кто получает результат от мудрых, вернуться, и они облегчают выполнение, мы считаем, что боль часто усиливается? Сусципит отвергнут, или бегство.</p>
			<p>Я объясню это; здесь было выбрано для функций этой ошибки, что много времени легко дискомфорт, боль была отвергнута для выбора препятствия к вещам мира, ненавидеть труд этих подарков, мы можем быть в состоянии быть брошены.</p>
		</div>
	</div>
</Transition>;

export const Contact = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
		
			<div className="alert alert-success">
				<h3 className="text-center mb-0">КОНТАКТЫ</h3>
			</div>

			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="name">Имя</label>
						<input type="text" name="name" id="name" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="mail">Email</label>
						<input type="email" name="mail" id="mail" className="form-control"/>
					</div>
					<div className="form-group">
						<label htmlFor="comments">Комментарии</label>
						<textarea name="comments" id="comments" rows="5" className="form-control"></textarea>
					</div>
					<button className="btn gsap-btn">Отправить</button>
				</div>
			</div>

		</div>
	</div>
</Transition>;
