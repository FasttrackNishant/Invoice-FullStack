# ThinkBridge Invoicing System  

## 🔗 URLs  
- **Frontend ( UI)**: https://invoice-ui-fawn.vercel.app/
- **Backend (Web API + Swagger)**: https://thinkbridgeinvoiceapi.azurewebsites.net/

---

## ▶️ Run Locally  

### Run Backend (API)  
```bash
cd  to Backend -> Invoice Backend 
dotnet build
dotnet run
```
API RUns on ** localohost

---

### Run Frontend
```bash
cd frontned
npm run dev
```

---

## ⚙️ Configuration  

In ** Frontenc ** set backend API URL in the useEffect :  

#  Add Connection String in the app.settings.json

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=YOUR_DB_NAME;User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;"
}
```
