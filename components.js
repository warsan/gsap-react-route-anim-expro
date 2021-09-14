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
      <p>
      Мысль надуло, — значит, "ветер перемен",<br/>
      Всё логично, если "parent" — тоже "men",<br/>
      Где-то там, за рубежами, свой "доме́н",<br/>
      Прибирал к рукам счастливый бизнесмен.<br/>
      <br/>
      Здесь — мой дом и до́мен мой — не на ветру,<br/>
      — Всем привет!... (к сему, "собака-точка-ру")</p>
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
      <p>И возведён был "ко́мплекс". (не компле́кс),<br/>
         Лишь на Олимпе "комплексирующих" нету,<br/>
Закомплексованными взбрендил интернет,<br/>
Шагнув клипартом с теленовости в газету...<br/>
Виват стране, где процветает слово "секс",<br/>
Ещё — жевательно-хватательный рефлекс...</p>
			<p>
Правостороннее движение — Ура!!!<br/>
Правоглазастость, праворукость, правоухость,<br/>
Правопреемственность и Ева из ребра,<br/>
— Из правого... И этот факт — не глупость.<br/>
Усохнуть — вправе, — даже левая нога,<br/>
Коль помогать не хочет правой нифига...</p>
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
				<h2 className="text-center mb-0">ПОДАРОК</h2>
			</div>
			<p>Слово "подарок" (для "вещих" и "вящих"),<br/>
Кроме "Данайцев, дары приносящих"<br/>
Предполагает его безвозмездность,<br/>
Безоборотность, возможно полезность, -<br/>
Эта полезность всего лишь желательна,<br/>
Но для дарящего — необязательна,<br/>
Ведь "обязательство" в слове "подарок"<br/>
Сударей — портит... (а также сударок)</p>
			<p>Бойтесь ругающих, блеющих, лающих,<br/>
— Жадно подарки твои обсуждающих,<br/>
В зубы взирающих, рынком укушенных,<br/>
Бизнесу веря на совесть контуженных,<br/>
Желчных и алчных, скареднозуженных,<br/>
Также наглаженных и отутюженных,<br/>
Конных и пеших, "вещих" и "вящих",<br/>
— Бойтесь "Данайцев, дары приносящих"...</p>
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
