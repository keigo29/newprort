import logo from './logo.svg';
import './App.css';
import Mvc from'./image 20.svg';
import check from './Vector.svg'
import de from './de.png'
import slide from './slides.png'
import bar from './bar.png'
import but from './but.png'
import lent from './lent.png'
import gen from './gen.png'
import car from './car.png'
import gin from './gin.png'
import ins from './ins.png'
import web from './図1.png'
import icon from './instaicon.png'

function App() {
  return (
   <div className='main'>
    <header>
    <img src={Mvc} className='mvc' />
    <div>
    </div>
    </header>
    <div className='mn'>
		<div className='bcircle one'></div>
		<div className='bwcircle two'></div>
		<div className='service lcard'>
        <h3 className='h3'>About me</h3>
        <div className='name'>石倉圭悟</div>
        <div className='sletter'>Keigo Ishikura</div>
		<p className='p-text'>
		2002年、神奈川県生まれ。個人事業主/インターン生としてコーポレートサイトのコーディングやデザインをメインのしごとして、十数社のコーポレートサイト、ランディングページの作成業務を担当しています。
		デザイン・コーディングまでワンストップで対応しています。
		<br/>今後はフロントエンドでの開発ができるようになるため現在javascriptフレームワークを学習中です。
		</p>
      </div>
      <div className='service'>
        <h3 className='h3'>Service</h3>
        <div className='intotxt'>ホームページリニューアル、デザイン作成<br/>
インスタグラム投稿デザイン。
</div>
<div className='cards' >


<div className='card'>
  <div className='num'>01</div>
  <div className='c-img'><img src={de}alt=""  height={90}/></div>
  <div className='c-h'>デザイン制作
</div>
  <div className='c-txt'>依頼主さまとのヒアリングをもとに<br/>資料やUIデザインを作成します。</div>
</div>
<div className='card'>
  <div className='num'>02</div>
  <div className='c-img'><img src={web} alt="" height={90}/></div>
  <div className='c-h'>webサイト制作

</div>
  <div className='c-txt'>様々な業種に対応した<br/>ホームページやランディングページの<br/>作成を代行致します。</div>
</div>
<div className='card'>
  <div className='num'>03</div>
  <div className='c-img'><img src={icon} alt="" height={90}/></div>
  <div className='c-h'>instagram投稿作成

</div>
  <div className='c-txt'>ユーザーに伝えたい内容を<br/>見やすいデザインに落とし込みます</div>
</div>
</div>
<div className='bcircle2 three'></div>
		
      </div>
	  <div className='bcircle3 five'></div>
		<div className='ccircle six'></div>
      <div className='service'>
        <h3 className='h3'>Skill</h3>
        {/* <div className='intotxt'>ホームページリニューアル、デザイン作成<br/>
インスタグラム投稿デザイン。
</div> */}
<div class="my-class" role="region" tabindex="0">
<table>
	<thead>
	<tr className='borderhed'>
    
		<th></th>
		<th>0〜25%</th>
		<th>25〜50%</th>
		<th>50〜75%
</th>
		<th>75〜100%
</th>
	</tr>
	</thead>
	<tbody>
	<tr>
    
		<td className='sidehed'>Figma</td>
		<td></td>
		<td></td>
		<td> </td>
    	<td><div className='blcircle'><img src={check} alt=""  className='chekmark'/></div></td>
	</tr>
	<tr>
		<td className='sidehed'>Html＆css
</td>
		<td></td>
		<td></td>
		<td><div className='blcircle'><img src={check} alt=""  className='chekmark'/></div></td>
    <td></td>
	</tr>
	<tr>
		<td className='sidehed'>Wordpress</td>
		<td></td>
		<td></td>
		<td><div className='blcircle'><img src={check} alt=""  className='chekmark'/></div></td>
    <td></td>
	</tr>
	<tr>
		<td className='sidehed'>Illustrator
</td>
		<td></td>
		<td><div className='blcircle'><img src={check} alt=""  className='chekmark'/></div></td>
		<td></td>
    <td></td>
	</tr>
	</tbody>
</table>
</div>
      </div>
      
	  
      <div className='service lcard'>
		
        <h2 className='h3 center'>Works</h2>
        <h3 className='h3'>Slide</h3>
        <div className='name'>資料デザイン</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		商談用資料など多種多様な文字が多く読みにくい資料をアイコンや配置で工夫し、一目で内容を理解できる資料を作ることを心がけました。
		</p>
       <div className='w-image'><img src={slide} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
	  <div className='bcircle2 seven'></div>
	  <div className='service lcard'>  
	  <h3 className='h3'>instagram投稿作成</h3> 
        <div className='name'>本紹介sns運用・デザイン</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		本が苦手な人にも本に興味を持ってもらいたいという思いで本の内容をデザインで見やすく紹介するアカウント運用しました。<br/>一年ほど前に運用を停止していますが、現在も100人以上の方にフォローして頂いております。
		<p className='a-text'><a href="https://www.instagram.com/iu_business_hints/" target='__blank'>iU本紹介</a>
<br/>
<br/>
		
		</p>
		</p>
       <div className='w-image posts'><img src={ins} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
      <div className='service lcard'>
		
        <h3 className='h3'>Web</h3>
        <div className='name '>Barホームページ制作</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		実際に店舗に出向きバーの高級感のある雰囲気をホームページ内に適応しました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={bar} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
	  <div class="bwcircle eight"></div>
      <div className='service lcard'>   
        <div className='name'>3PL（ECサポート）企業 <br/>コーポレートサイト制作</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		サイト内に3PLについてストレスなく理解してもらうため、様々なランディングページをリサーチし<br/>ユーザーにサービスの良さをアピールできるような<br/>サイトを作成致しました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={but} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
	  <div className='bcircle2 nine'></div>
      <div className='service lcard'>   
        <div className='name '>レンタルスペースLP</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		配色やfigmaを使用した画像加工によりスペース内が美しく映るように工夫しました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={lent} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
	  <div class="bcircle2 ten"></div>
      <div className='service lcard'>   
        <div className='name'>レストランホームページ</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		料理の美味しさが引き立つようにサイト内の配色をベースカラー黒とアクセントカラー金の配色で高級感を引き立たたせました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={gen} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
      <div className='service lcard'>   
        <div className='name'>高級中華料理料理店ホームページ</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		爽やかな翡翠色をベースカラーにすることで、こってりとした中華料理のイメージを変えあっさりとした雰囲気に仕上げました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={gin} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
	  <div className='bwcircle eleven'></div>
      <div className='service lcard'>   
        <div className='name'>車用グッズ販売企業<br/>コーポレートサイト</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		販売促進を目的としたサイトの更新であったため、どうすればユーザーがECサイトに訪問していくのかを研究しながら作成しました。
		<p className='a-text'>
<br/>
<br/>
		＊掲載許可待ちのためモザイクをかけさせて頂いております
		</p>
		</p>
       <div className='w-image'><img src={car} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
     
	  </div>
   </div>
  );
}

export default App;
