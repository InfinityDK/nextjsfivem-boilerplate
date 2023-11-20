RegisterCommand('opennext', function()
    
    SendNUIMessage({
        type = "showUI",
        data = {
            value = "FiveM Value"
        }
    })

    SetNuiFocus(true, true)
end, false)

RegisterNUICallback("close", function(data, cb)
    SetNuiFocus(false, false)
end)

RegisterNUICallback("whoami", function(data, cb)
    cb('fivem client')
end)
