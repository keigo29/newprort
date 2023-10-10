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
import ditail from './ditail.png'
import title1 from './title1.png'
import aslide from './2slide.png'
import bslide from './3slide.png'
import cslide from './1slide.png'
import dslide from './dslide.png'
import eslide from './eslide.png'
import fslide from './fslide.png'
import gslide from './gslide.png'
import hslide from './hslide.png'
import islide from './islide.png'
import jslide from './jslide.png'
import kslide from './kslide.png'
import pro from './pro.png'
import x from './x.png'
import xe from './ditailx.png'
import fdot from './fdot.png'
import sdot from './sdot.png'
import dot3 from './3dot.png'
import dot4 from './4dot.png'
import dot5 from './5dot.png'
import want from './want.svg'
import git from './git.svg'
import ni from './in.svg'
import twi from './twi.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import catapedia from "./catapedia.png"
import React, { useState, useEffect } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const ptext ="2002年生まれの神奈川県出身です。コーポレートサイトのコーディングとデザインをメインに仕事しています。これまで十数社のコーポレートサイトとランディングページの作成に携わりました。また、現在はフロントエンド開発にも挑戦し、JavaScriptのフレームワークを学習中です。お客様のニーズに合わせてデザインからコーディングまでワンストップで対応しています";
  const ntext ="石倉圭悟";
  const sletter ="ishikura keigo";
	const system1 = "<Catapedia/>"
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [problem, setProblem] = useState(true);
  const [accounting, setAccounting] = useState(false);
  const [sales, setSales] = useState(false);
  const [other, setOther] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // ウィンドウのリサイズ時にウィンドウの幅を更新する
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // コンポーネントがアンマウントされるときにリスナーをクリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (target) => {
    setProblem(target === 'problem');
    setAccounting(target === 'accounting');
    setSales(target === 'sales');
    setOther(target === 'other');
  };

  const clickHandler= ()=>{
    setOpen(true)
  }
  const openHandler= ()=>{
    setProfile(true)
  }
  const closeP= ()=>{
    setProfile(false)
  }
  const close= ()=>{
    setOpen(false)
  }
  return (
   <div className='main'>
    <header>
    <LazyLoadImage src={Mvc} className='mvc' />
    <div>
    </div>
    </header>
    <div className='mn'>
		<div className='bcircle one'></div>
		<div className='bwcircle two'></div>
		<div className='service lcard'>
    {profile && (  
         <div className='modalOverlayP'>
           <div className='modalP'>
            <img src={x} alt="" width={60} className='imgX' onClick={closeP} />
            <div className='hed'>
              <img src={pro} alt="" width={150} className='pro' />
              <div className='ntext'>
              <div className='name'>{ntext}</div>
              <div className='uni'>情報経営イノベーション専門職大学</div>
              <div className='icons'>
               <a href="https://www.wantedly.com/id/keigo_ishikura"><img src={want} alt="" className='want' /></a>
               <a href="https://www.linkedin.com/in/%E5%9C%AD%E6%82%9F-%E7%9F%B3%E5%80%89-2157ab242/"><img src={ni} alt="" className='in'/></a>
               <a href="https://github.com/keigo29"><img src={git} alt="" /></a>
               <a href="https://twitter.com/keigoyuwangnox1"><img src={twi} alt="" /></a>
            
              </div>
              </div>
              
            
            </div>
            <div className='history'>
              
                <div className='dwrap'>
                <div className='dot'>
                  <div className='year'>2002</div>
                  <img src={fdot} alt="" />
                   <div className='dtxt'>11月29日に<br/>長崎の病院で生まれる</div>
                </div>
                <div className='dot'>
                  <div className='year'>2018</div>
                  <img src={sdot} alt="" />
                   <div className='dtxt'>オーストラリア留学<br/>
(2週間)</div>
                </div>
                <div className='dot'>
                  <div className='year'>2021</div>
                  <img src={dot3} alt="" />
                   <div className='dtxt'>情報経営イノベーション<br/>
専門職大学入学</div>
                </div>
                <div className='dot'>
                  <div className='year'>2021</div>
                  <img src={dot4} alt="" />
                   <div className='dtxt'>web系インターン<br/>開始</div>
                </div>
                <div className='dot'>
                  <div className='year'>2023</div>
                  <img src={dot5} alt="" />
                   <div className='dtxt'>現在</div>
                </div>
          
                </div>
                <hr/>
             </div>
            <div>
            favorite
             </div>
            <div>
            favorite
             </div>
            <div>
                
             </div>
             
           </div>
       </div>
           

         )}
        <h3 className='h3'>About me</h3>
        <div className='name'>{ntext}</div>
        <div className='sletter'>{sletter}</div>
		<p className='p-text'>
		{ptext}<br/>
    <p className='textl'><img src={xe} width={90} onClick={openHandler}/></p>
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
  <div className='c-img'><LazyLoadImage src={de}alt=""  height={90}/></div>
  <div className='c-h'>デザイン制作
</div>
  <div className='c-txt'>依頼主さまとのヒアリングをもとに<br/>資料やUIデザインを作成します。</div>
</div>
<div className='card'>
  <div className='num'>02</div>
  <div className='c-img'><LazyLoadImage src={web} alt="" height={90}/></div>
  <div className='c-h'>webサイト制作

</div>
  <div className='c-txt'>様々な業種に対応した<br/>ホームページやランディングページの<br/>作成を代行致します。</div>
</div>
<div className='card'>
  <div className='num'>03</div>
  <div className='c-img'><LazyLoadImage src={icon} alt="" height={90}/></div>
  <div className='c-h'>instagram投稿作成

</div>
  <div className='c-txt'>伝えたい内容を見やすいデザインに<br/>落とし込み投稿の可読性を高めます。</div>
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
    	<td><div className='blcircle'><LazyLoadImage src={check} alt=""  className='chekmark'/></div></td>
	</tr>
	<tr>
		<td className='sidehed'>Html＆css
</td>
		<td></td>
		<td></td>
		<td><div className='blcircle'><LazyLoadImage src={check} alt=""  className='chekmark'/></div></td>
    <td></td>
	</tr>
	<tr>
		<td className='sidehed'>Wordpress</td>
		<td></td>
		<td></td>
		<td><div className='blcircle'><LazyLoadImage src={check} alt=""  className='chekmark'/></div></td>
    <td></td>
	</tr>
	<tr>
		<td className='sidehed'>Illustrator
</td>
		<td></td>
		<td><div className='blcircle'><LazyLoadImage src={check} alt=""  className='chekmark'/></div></td>
		<td></td>
    <td></td>
	</tr>
	</tbody>
</table>
</div>
      </div>
      
	  
      <div className='service lcard'>
		
        <h2 className='h3 center'>Works</h2>
        <h3 className='h3'>Sysmtem</h3>
        <div className='name'>{system1}</div>
		
        <div className='w-wrapper'>
		<p className='w-text'>
		nextjs ✕ sqlite3を用いたシステム開発<br/>
		誰でも図鑑を作成できる情報共有アプリ<br/>
		デザインからフロントエンド構築・バックエンド構築<br/>までフルスタックで作成しました。
		<p className='a-text'>
		<a href="https://catapedia-810e2e93cfe4.herokuapp.com/" target='__blank'><img src={ditail} width={70} /></a>
		</p></p>
		<a href="https://catapedia-810e2e93cfe4.herokuapp.com/" target='__blank'>
       <div className='w-image'><LazyLoadImage src={catapedia} alt=""  width={250}/></div>
	   </a>
		
		</div>


		
		
      </div>
      <div className='service lcard'>
	  {open && (
                <div className='modalOverlay'>
                   <div className='modalF'>
					<img src={x} alt="" width={60} className='imgX' onClick={close} />
					<div>
					<div className='btnWrap'>
      <div
        className={problem ? 'active' : 'btn'}
        onClick={() => handleButtonClick('problem')}
      >
        問題資料
      </div>
      <div
        className={accounting ? 'active' : 'btn'}
        onClick={() => handleButtonClick('accounting')}
      >
        会計知識資料
      </div>
      <div
        className={sales ? 'active' : 'btn'}
        onClick={() => handleButtonClick('sales')}
      >
        営業用資料
        </div>
    </div>
					</div>
          {problem && (
           
            <table className='slideT'>
                <tr>
                  <td className='right bottom'><img src={title1} alt=""  /></td>
                  <td className='left bottom'><img src={aslide} alt=""  /></td>
                </tr>
                <tr>
                  <td className='right'><img src={bslide} alt=""  /></td>
                  <td className='left'><img src={cslide} alt=""  /></td>
                </tr>
            </table>
            

          )}
          {accounting && (
        
            <table className='slideT'>
                <tr>
                  <td className='right bottom'><img src={dslide} alt=""  /></td>
                  <td className='left bottom'><img src={eslide} alt=""  /></td>
                </tr>
                <tr>
                  <td className='right'><img src={fslide} alt=""  /></td>
                  <td className='left'><img src={gslide} alt=""  /></td>
                </tr>
            </table>
            

          )}
          {sales && (
        
            <table className='slideT'>
                <tr>
                  <td className='right bottom'><img src={hslide} alt=""  /></td>
                  <td className='left bottom'><img src={islide} alt=""  /></td>
                </tr>
                <tr>
                  <td className='right'><img src={jslide} alt=""  /></td>
                  <td className='left'><img src={kslide} alt=""  /></td>
                </tr>
            </table>
            

          )}
                   </div>
                </div>
            )}
        {/* <h2 className='h3 center'>Works</h2> */}
        <h3 className='h3'>Slide</h3>
        <div className='name'>資料デザイン</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		商談用資料など多種多様な文字が多く読みにくい資料をアイコンや配置で工夫し、一目で内容を理解できる資料を作ることを心がけました。
    <p className='a-text'><div onClick={clickHandler}><img src={ditail} width={70} /></div></p>
		</p>
       <div className='w-image'><LazyLoadImage src={slide} alt=""  width={250}/></div>
		   
		
		</div>
		
      </div>
	  <div className='bcircle2 seven'></div>
	  <div className='service lcard'>  
	  <h3 className='h3'>instagram投稿作成</h3> 
        <div className='name'>本紹介sns運用・デザイン</div>
        <div className='w-wrapper'>
		<p className='w-text'>
		本が苦手な人にも本に興味を持ってもらいたいという思いで本の内容をデザインで見やすく紹介するアカウント運用しました。<br/>一年ほど前に運用を停止していますが、現在も100人以上の方にフォローして頂いております。
		<p className='a-text'><a href="https://www.instagram.com/iu_business_hints/" target='__blank'><img src={ditail} width={70} /></a>
<br/>
<br/>
		
		</p>
		</p>
       <div className='w-image posts'><LazyLoadImage src={ins} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={bar} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={but} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={lent} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={gen} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={gin} alt=""  width={250}/></div>
		
		
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
       <div className='w-image'><LazyLoadImage src={car} alt=""  width={250}/></div>
		
		
		</div>
		
      </div>
     <div>
		
	 </div>
	  </div>
    <div className='tablewrap'>
    <table>
  <tbody>
  <tr>
  <th>

  </th>
  </tr>
    </tbody>
          
    </table>

    </div>
   </div>
  );
}

export default App;
