const allMember = [
  {
    id: 0,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/nishizawa.png",
    name: "会長",
    content: "(株)ネオキャリア",
    title: "西澤 亮一",
    pys: "1978年北海道生まれ。2000年に株式会社ネオキャリアを設立し、2002年代表取締役就任。人材（新卒・中途・エンジニア・海外）、メディア、介護、保育などの領域にて高い成長性を誇る。現在は国内76拠点、海外7ヶ国11拠点に展開し、従業員は3000人を超える。全社で掲げるPURPOSE「人と本気で向き合い、未来を切り拓く」のもと、HRの各領域に注力し更なる成長を目指す。",
    link: "https://www.neo-career.co.jp/",
  },
  {
    id: 1,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/tomiyama.png",
    name: "副会長<br/>マーコム/ファイナンス理事",
    content: "サツドラホールディングス(株)",
    title: "富山 浩樹",
    pys: "1976年札幌生まれ。札幌の大学を卒業後、日用品卸商社に入社。2007年株式会社サッポロドラッグストアーに入社。営業本部長の傍ら2013年に株式会社リージョナルマーケティングを設立し、北海道共通ポイントカード「EZOCA」の事業をスタートする。2015年5月に代表取締役社長に就任。2016年8月にサツドラホールディングス株式会社を設立し代表取締役社長に就任。「地域をつなぎ、日本を未来へ。」のコンセプトのもと、店舗や地域の資産を活かして新たな課題解決型ビジネスの創造を目指す。",
    link: "https://satudora-hd.co.jp/",
  },
  {
    id: 2,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/kato.png",
    name: "ラーニング/ファイナンス理事",
    content: "(株)北国からの贈り物",
    title: "加藤 敏明",
    pys: "加藤敏明 KATO TOSHIAKI KITAGUNI INC. CEO <br/>一級建築士&地方創生プロデューサー。趣味は海外旅行・グルメツアー・美術館巡りと芸術鑑賞。最近の活動内容、会社概要など</br>https://lit.link/KATOTOSHIAKI",
    link: "http://www.kitaguni.tv/",
  },
  {
    id: 3,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/irisawa.png",
    name: "メンバーシップ理事",
    content: "エコモット(株)",
    title: "入澤 拓也",
    pys: "1980年生まれ、北海道札幌市出身。米HighlineCommunityCollegeを卒業後、2002年クリプトン・フューチャー・メディア（株）に就職し、モバイルコンテンツのサイトの運営などに携わる。2007年、IoTソリューションの提供を行うエコモット（株）を設立。IoT用端末製造、通信インフラ、アプリケーション開発並びにクラウドサービス運用等の業務のワンストップサーピスを展開している。2017年札証アンビシャス上場、2018年東証マザーズ上場。2019年札幌商工会議所の起業家表彰において「大賞」を受賞。2019年5月より「北海道IT推進協会」会長を務める。2022年4月札幌市CDO補佐官に就任。",
    link: "https://www.ecomott.co.jp",
  },
  {
    id: 4,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/kawamura.png",
    name: "インテグレーション理事",
    content: "(株)MASSIVE SAPPORO",
    title: "川村 健治",
    pys: "民泊・無人ホテルの開業・運営を一気通貫でやってます。インバウンド6,000万人時代に向け宿泊DX(フロント無人、リモート運営、住込管理人スキーム)を駆使し低固定費を実現しながらユニークで高付加価値な宿泊施設をエリアフリー建物フリーでプロデュース中。空き家、別荘、廃業旅館など遊休資産を再生します。銭湯を貸切サウナ施設に再生してます。",
    link: "https://massivesapporo.com/",
  },
  {
    id: 5,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/iwasaki.png",
    name: "フォーラム理事",
    content: "(株)ランクアップ",
    title: "岩崎 裕美子",
    pys: "当別町生まれ。藤女子短期大学を卒業。JTBに入社。その後、広告代理店に転職し東京本社に転勤。営業成績トップとなり取締役営業本部長に就任するも、長時間労働による不貴族な生活で肌がボロボロになったことに悩む。その後、自身の肌の悩みを解決するために、株式会社ランクアップを設立し、オリジナルブランドであるMANARAを販売。ヒット製品「ホットクレンジングゲル」は温感クレンジング部門で10年連続1位を獲得し、現在はアジアに進出。また女性社員が８０％と多いため仕事と子育てが両立できる環境を作り復職率１００％を達成。女性が活躍をあきらめなくていい社会を目指している。",
    link: "https://manara.jp/",
  },
  {
    id: 6,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/ishimizu.png",
    name: "MyEO理事",
    content: "石屋製菓(株)",
    title: "石水 創",
    pys: "1982年生まれ。東洋大学卒業後、1年間、イギリス、スイスに留学。2004年に石屋製菓入社後、製造現場を経験しながら、光塩学園調理製菓専門学校夜間部に通う。2007年白い恋人賞味期限改ざんによる不祥事により、品質管理部を新設し、取締役に就任。2013年、小樽商科大学ビジネススクールに通いMBAを取得。同年、石屋製菓、石屋商事の代表取締役社長に就任する。「しあわせをつくるお菓子」という経営理念のもと、お客さま、従業員、北海道のしあわせを日々創造している。",
    link: "https://www.ishiya.co.jp/",
  },
  {
    id: 7,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/fujita.png",
    name: "GSEA/メンターシップ理事",
    content: "アドバンサー(株)",
    title: "藤田 純",
    pys: "1983年北海道名寄市生まれ。地元の高校を卒業後、東京に進学、その後三菱系列の会社に新卒入社。その半年後に通信系ベンチャー企業に転職し2015年4月アドバンサー株式会社を設立する。現在、350名を超える社員を抱える通信系特化型人材支援サービス会社へと成長させた。2021年7月には祖父が立ち上げた藤田産業株式会社（プロパンガス事業）を継承し現在東京と北海道の２社を経営。EOでは学生起業家を支援するGSEA理事を4年務め、自社でも事業家を生み出しサポートする「事業家創造プラットフォーム」の運営を開始。",
    link: "https://advancer.co.jp/",
  },
  {
    id: 8,
    img: "https://eohokkaido.org/wp-content/themes/eohokkaido/img/member/maeda.png",
    name: "アクセラレーター理事",
    content: "(株)ゼンシン",
    title: "前田 忠嗣",
    pys: "1969年北海道新ひだか町生まれ。大学卒業後、大手学習塾に入社。1996年株式会社ゼンシンを創業。代表取締役社長に就任。現在に至る。サッカースクールとそのチーム運営。その実績とノウハウを活かして障がい児の運動発達と社会性発達の支援を行う障がい福祉事業をかわきりに障がい者就労支援事業など、障がい福祉全般を行う。障がい福祉業界の質向上と発展を志、業界ナンバーワンを目指しています。",
    link: "https://zenshin-tm.co.jp/",
  },
];

const ElMember = document.getElementById("member-all");

const renderMember = (memberData) => {
  return memberData
    .map(
      (member) => `
  <div class="col-lg-4 col-6 ">
  <div onclick=handleClick(${member.id}) class="member-infor p-1">
    <div class="member-img">
      <img
        class="image-member"
        src="${member.img}"
        alt="${member.name}"
      />
      <div class="member-name">
        <p class="text-member">${member.name}</p>
      </div>
    </div>
    <div class="g-text-member">
      <p class="member-ct">${member.content}</p>
      <h1 class="member-hd">${member.title}</h1>
    </div>
  </div>
</div>
  `
    )
    .join(",")
    .replaceAll(/,/g, "");
};

ElMember.innerHTML = renderMember(allMember);

const handleClick = (id) => {
  const memberSeleted = allMember.find((member) => member.id === id);
};
