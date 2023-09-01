
- create-react-app: là thư viện, là công cụ được phát triển bởi Facebook với mục đích đơn giản hóa việc tạo ra dự án với Webpack + ReactJS

- Npx: +Npx đc tạo ra từ npm, và npm đc tạo ra từ node 

       -> Là 1 thư viện giúp thực thi 1 cái thư viện khác mà mình k nhất thiết phải cài nó trên máy 
              VD: npx create-react-app tiktok -> dùng thư viện npx tạo thư viện create-react-app với tên tiktok mà k cần phải cài hẳn vào máy tính

       -> Để thực thi những thư viện cung cấp file bin (file bin để viết kịch bản, viết mã code) -> thực thi code ở trong file bin đó (tên file bin cùng tên với tên thư viện) -> Đây là khi đã npm thư viện về r

       -> Có thể hiểu npm là cài thư viện, còn npx là chạy thư viện đó (còn khi k có npm để install thư viện về mà lại chạy npx thì nó sẽ tự install thư viện về để chạy, xog rồi tự xóa thư viện đó luôn)

- YARN (Yet Another Resource Negotiator) - Trình quản lý gói khác: Giống npm -> yarn là thư viện trong npm.js3
       -> yarn có thể cài nhiều thư viện song song -> nhanh hơn npm (nhưng phụ thuộc vào băng thông mạng); yarn "tốn dung lượng hơn" vì khi tải 1 thư viện về thì yarn tự tạo 1 nơi để lưu trữ thư viện phòng khi lỡ xóa thư viện đó thì có thể lấy ở nơi đã lưu trữ nếu có (k phải đi tải lại từ đầu)
       -> npm phải cài thư viện 1 cách tuần tự, khi xóa thư viện phải tải lại từ đầu  

- Package.json: Lưu trữ các thư viện, dự án mà mình cài vào (mỗi thư viện/dự án đều có cấu trúc như nhau - do Node quản lý); và mỗi thư viện/dự án mình cài vào có thể cs những thư viện/dự án khác phụ thuộc vào nó  (dependencies) -> nghĩa là trong thư viện lại có thư viện

- Pakage-lock.json: Quản lý và lưu trữ các thư viện bên Package.json -> để tối ưu hóa k tải 1 thư viện nhiều lần nếu trùng và tăng hiệu năng tải

- CRA folder structure: 
       +node_modules:  Chứa tất cả các thư viện trong dự án đã cài đặt 

       +public: Chứa các file công khai (có thể truy cập khi chạy web trên trình duyệt); đồng thời nó cũng đc coi như file root (khi chạy web server thì nó sẽ vào file index.html trong public đầu tiên để render ra)

       +.gitignore: Quy định/Khai báo để bỏ qua các thư mục khi mình k muốn đưa lên git (ý là khi đc git commit đi thì những file/folder nào bị loại bỏ)

       +build: file production để deloy lên cho khách hàng

       +README: Document để mô tả 

       +src: Folder chứa source code
              ->file index.js là entry point (điểm vào) của ứng dụng
              ->reportWebVital: Phân tích web của mình và gửi báo cáo thống kê lên google analytic để xem web của mình hiệu năng ntn -> để tối ưu trải nghiệm ng dùng